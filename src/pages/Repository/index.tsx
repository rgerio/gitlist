import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import {
  Container,
  Main,
  RepositoryDetailsPanel,
  AboutOwnerPanel,
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

const Repository: React.FC = () => {
  const params = useParams<RepositoryParams>();
  const [repository, setRepository] = useState<Repository>();

  useEffect(() => {
    api.get(`repos/${params.repository}`).then((response) => {
      setRepository(response.data);
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
          <img
            src={
              repository
                ? repository.owner.avatar_url
                : 'https://github.com/example.png'
            }
            alt="User"
          />
          <h1>{repository ? repository.owner.login : 'Loading...'}</h1>
          <p>
            Frontend developer at Github. Creates inspiring screens that
            represents how human beings interact with the real world
          </p>
        </AboutOwnerPanel>
      </Main>
    </Container>
  );
};

export default Repository;
