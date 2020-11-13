import React from 'react';
import { FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import {
  Container,
  Main,
  RepositoriesPanel,
  SectionTitle,
  Form,
  RepositoryList,
} from './styles';

import Header from '../../components/Header';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Header />

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

          <RepositoryList>
            <li>
              <Link to="repository/fulanosilva/repo-01">
                <div>
                  <img src="https://github.com/example.png" alt="User" />
                </div>
                fulanosilva/repo-01
              </Link>
            </li>
            <li>
              <Link to="repository/fulanosilva/repo-01">
                <div>
                  <img src="https://github.com/example.png" alt="User" />
                </div>
                user/another-repo-with-a-very-very-very-very-long-name
              </Link>
            </li>
            <li>
              <Link to="repository/fulanosilva/repo-01">
                <div>
                  <img src="https://github.com/example.png" alt="User" />
                </div>
                another-user/repo-01
              </Link>
            </li>
          </RepositoryList>
        </RepositoriesPanel>
      </Main>
    </Container>
  );
};

export default Dashboard;
