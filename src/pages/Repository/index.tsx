import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import { FiCode, FiGlobe, FiLink, FiMapPin } from 'react-icons/fi';
import {
  Container,
  Main,
  RepositoryDetailsPanel,
  AboutOwnerPanel,
  UserDetailsList,
  UserPublicRepoList,
} from './styles';

import api from '../../services/api';

import Header from '../../components/Header';

interface RepositoryParams {
  repository: string;
}

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

interface User {
  name: string;
  bio: string;
  html_url: string;
  location: string;
  blog: string;
  public_repos: number;
  public_gists: number;
}

const Repository: React.FC = () => {
  const params = useParams<RepositoryParams>();
  const [repository, setRepository] = useState<Repository>();
  const [user, setUser] = useState<User>();

  useEffect(() => {
    api.get<Repository>(`repos/${params.repository}`).then((response) => {
      setRepository(response.data);

      api
        .get<User>(`users/${response.data.owner.login}`)
        .then((userResponse) => {
          setUser(userResponse.data);
        });
    });
  }, [params.repository]);

  return (
    <Container>
      <Header />

      <Main>
        <RepositoryDetailsPanel>
          <div>
            <img
              src={
                repository
                  ? repository.owner.avatar_url
                  : 'https://github.com/example.png'
              }
              alt="User"
            />
            <h2>{repository ? repository.full_name : 'Loading...'}</h2>
          </div>
          <p>{repository ? repository.description : 'Loading...'}</p>
        </RepositoryDetailsPanel>
        <AboutOwnerPanel>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={user ? user.html_url : '/'}
          >
            <img
              src={
                repository
                  ? repository.owner.avatar_url
                  : 'https://github.com/example.png'
              }
              alt="User"
            />
            <h1>{repository ? repository.owner.login : 'Loading...'}</h1>
          </a>

          {user ? (
            <>
              <p>{user.bio}</p>

              <UserDetailsList>
                <li>
                  <FiMapPin size={14} />
                  <span>{user.location}</span>
                </li>
                <li>
                  <FiLink size={14} />
                  <span>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={user.blog}
                    >
                      {user.blog}
                    </a>
                  </span>
                </li>
              </UserDetailsList>

              <UserPublicRepoList>
                <li>
                  <div>
                    <FiGlobe size={12} />
                    <span>Repositories</span>
                  </div>
                  <strong>{user.public_repos}</strong>
                </li>
                <li>
                  <div>
                    <FiCode size={12} />
                    <span>Public Gists</span>
                  </div>
                  <strong>{user.public_gists}</strong>
                </li>
              </UserPublicRepoList>
            </>
          ) : (
            <p>Loading...</p>
          )}
        </AboutOwnerPanel>
      </Main>
    </Container>
  );
};

export default Repository;
