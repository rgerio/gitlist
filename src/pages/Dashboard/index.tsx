import React from 'react';
import { FiCode, FiPlus } from 'react-icons/fi';

import {
  Container,
  Header,
  HeaderContent,
  Main,
  RepositoriesPanel,
  RepositoryDetailsPanel,
  AboutOwnerPanel,
  SectionTitle,
  Form,
  RepositoriesList,
} from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Header>
        <HeaderContent>
          <img
            src="https://pngimg.com/uploads/github/github_PNG24.png"
            alt="Gitlist"
          />
        </HeaderContent>
      </Header>
      <Main>
        <RepositoriesPanel>
          <SectionTitle>Repositories</SectionTitle>

          <Form>
            <input placeholder="Type a repository name..." />
            <button type="submit">
              <FiPlus size={16} />
              Add
            </button>
          </Form>

          <RepositoriesList>
            <li>
              <a href="/">
                <div>
                  <FiCode size={20} />
                </div>
                fulanosilva/repo-01
              </a>
            </li>
            <li>
              <a href="/">
                <div>
                  <FiCode size={20} />
                </div>
                user/another-repo-with-a-very-very-very-very-long-name
              </a>
            </li>
            <li>
              <a href="/">
                <div>
                  <FiCode size={20} />
                </div>
                another-user/repo-01
              </a>
            </li>
          </RepositoriesList>
        </RepositoriesPanel>
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

export default Dashboard;
