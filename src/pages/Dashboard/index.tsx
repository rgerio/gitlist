import React, { useCallback, useEffect, useState } from 'react';
import { FiChevronRight, FiPlus, FiX } from 'react-icons/fi';
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
import api from '../../services/api';

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  // const [repositoryNames, setRepositoryNames] = useState<string[]>([]);
  const [repositoryToAdd, setRepositoryToAdd] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>(() => {
    const storagedRepositories = localStorage.getItem('gitlist:repositories');

    if (!storagedRepositories) {
      return [];
    }

    return JSON.parse(storagedRepositories);
  });

  useEffect(() => {
    localStorage.setItem('gitlist:repositories', JSON.stringify(repositories));
  }, [repositories]);

  const handleAddRepository = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      api
        .get<Repository>(`repos/${repositoryToAdd}`)
        .then((response) => {
          const repository = response.data;
          setRepositories((oldRepositories) => [
            repository,
            ...oldRepositories,
          ]);

          setRepositoryToAdd('');
        })
        .catch(() => {
          alert('Repository not found');
        });
    },
    [repositoryToAdd],
  );

  const handleChangeAddRepositoryInput = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setRepositoryToAdd(event.target.value);
    },
    [],
  );

  const handleDeleteRepository = useCallback((repository: string) => {
    setRepositories((oldRepositories) =>
      oldRepositories.filter(
        (oldRepository) => oldRepository.full_name !== repository,
      ),
    );
  }, []);

  return (
    <Container>
      <Header />

      <Main>
        <RepositoriesPanel>
          <SectionTitle>Repositories</SectionTitle>

          <Form onSubmit={handleAddRepository}>
            <input
              placeholder="Type a repository name..."
              value={repositoryToAdd}
              onChange={handleChangeAddRepositoryInput}
            />
            <button type="submit">
              <FiPlus size={16} />
              Add
            </button>
          </Form>

          <RepositoryList>
            {repositories.map((repository) => (
              <li key={repository.full_name}>
                <Link to={`repository/${repository.full_name}`}>
                  <div>
                    <img
                      src={repository.owner.avatar_url}
                      alt={repository.owner.login}
                    />
                    <div>
                      <h2>{repository.full_name}</h2>
                      <p>{repository.description}</p>
                    </div>
                  </div>
                  <FiChevronRight size={32} />
                </Link>
                <button
                  type="button"
                  onClick={() => handleDeleteRepository(repository.full_name)}
                >
                  <FiX size={16} />
                </button>
              </li>
            ))}
          </RepositoryList>
        </RepositoriesPanel>
      </Main>
    </Container>
  );
};

export default Dashboard;
