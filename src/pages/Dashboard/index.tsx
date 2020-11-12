import React from 'react';
import { FiCode, FiPlus } from 'react-icons/fi';

import {
  Container,
  Header,
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
        <img
          src="https://pngimg.com/uploads/github/github_PNG24.png"
          alt="Gitlist logo"
        />
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
                user/repo-01
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
          <h1>Repository Details: user/repo-01</h1>
          <p>To begin, add a repository...</p>
        </RepositoryDetailsPanel>
        <AboutOwnerPanel>
          <h1>Fulano is the owner and a great dev</h1>
        </AboutOwnerPanel>
      </Main>
    </Container>
  );
};

export default Dashboard;
