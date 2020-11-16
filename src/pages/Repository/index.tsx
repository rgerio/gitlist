import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { format } from 'date-fns';
import {
  FiAlertCircle,
  FiCode,
  FiGitCommit,
  FiGithub,
  FiGlobe,
  FiLink,
  FiMapPin,
  FiStar,
  FiTag,
} from 'react-icons/fi';
import {
  Container,
  Main,
  RepositoryDetailsPanel,
  RepositoryStatusList,
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
  stargazers_count: number;
  watchers_count: number;
  forks_count: number;
  open_issues_count: number;
}

interface User {
  login: string;
  name: string;
  bio: string;
  html_url: string;
  location: string;
  blog: string;
  public_repos: number;
  public_gists: number;
}

interface Release {
  html_url: string;
  tag_name: string;
  published_at: string;
}

interface Commit {
  commit: {
    author: {
      date: string;
    };
    url: string;
  };
}

const Repository: React.FC = () => {
  const params = useParams<RepositoryParams>();
  const [repository, setRepository] = useState<Repository>();
  const [user, setUser] = useState<User>();
  const [latestRelease, setLatestRelease] = useState<Release>();
  const [latestCommit, setLatestCommit] = useState<Commit>();

  useEffect(() => {
    api.get<Repository>(`repos/${params.repository}`).then((response) => {
      setRepository(response.data);

      api
        .get<User>(`users/${response.data.owner.login}`)
        .then((userResponse) => {
          setUser(userResponse.data);
        });
    });

    api
      .get<Release[]>(`repos/${params.repository}/releases`)
      .then((response) => {
        setLatestRelease(response.data[0]);
      });

    api.get<Commit[]>(`repos/${params.repository}/commits`).then((response) => {
      setLatestCommit(response.data[0]);
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

            <div>
              <h2>{repository ? repository.full_name : 'Loading...'}</h2>
              <p>{repository ? repository.description : 'Loading...'}</p>
            </div>
          </div>

          <RepositoryStatusList>
            <li>
              <div>
                <FiAlertCircle size={12} />
                <span>Open Issues</span>
              </div>
              <strong>
                {repository ? repository.open_issues_count : '...'}
              </strong>
            </li>
            <li>
              <div>
                <FiGithub size={12} />
                <span>Forks</span>
              </div>
              <strong>{repository ? repository.forks_count : '...'}</strong>
            </li>
            <li>
              <div>
                <FiStar size={12} />
                <span>Stars</span>
              </div>
              <strong>
                {repository ? repository.stargazers_count : '...'}
              </strong>
            </li>
            <li>
              <div>
                <FiTag size={12} />
                <span>Latest release</span>
              </div>
              <strong>{latestRelease ? latestRelease.tag_name : '...'}</strong>
            </li>
            <li>
              <div>
                <FiGitCommit size={12} />
                <span>Latest Commit</span>
              </div>
              <strong>
                {latestCommit
                  ? format(
                      new Date(latestCommit.commit.author.date),
                      'MMM d, yyyy',
                    )
                  : '...'}
              </strong>
            </li>
          </RepositoryStatusList>
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

            <h1>{user ? user.name : 'Loading...'}</h1>
            <h2>{user ? `(${user.login})` : 'Loading...'}</h2>
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
