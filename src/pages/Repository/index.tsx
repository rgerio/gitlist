import React from 'react';

import {
  Container,
  Main,
  RepositoryDetailsPanel,
  AboutOwnerPanel,
} from './styles';

import Header from '../../components/Header';

const Repository: React.FC = () => {
  return (
    <Container>
      <Header />

      <Main>
        <RepositoryDetailsPanel>
          <div>
            <img src="https://github.com/example.png" alt="User" />
            <h2>fulanosilva/repo-01</h2>
          </div>
          <p>Distributed platform for building autonomic network functions.</p>
        </RepositoryDetailsPanel>
        <AboutOwnerPanel>
          <img src="https://github.com/example.png" alt="User" />
          <h1>Fulano da Silva</h1>
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
