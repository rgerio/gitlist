import React, { useCallback, useEffect, useState } from 'react';
import {
  FiChevronRight,
  FiClock,
  FiPlus,
  FiTrendingUp,
  FiX,
} from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import {
  Container,
  Main,
  RepositoriesPanel,
  SectionTitle,
  Form,
  RepositoryList,
  DeleteButton,
  CompareButton,
} from './styles';

import api from '../../services/api';

import Header from '../../components/Header';

import { RootState } from '../../store/modules/rootReducer';
import { addRepositoryRequest } from '../../store/modules/comparison/actions';

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  const { loadingAddRepositoryRequest } = useSelector(
    (state: RootState) => state.comparison,
  );
  const dispatch = useDispatch();

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
                  <div>
                    <FiChevronRight size={32} />
                  </div>
                </Link>
                <DeleteButton
                  type="button"
                  onClick={() => handleDeleteRepository(repository.full_name)}
                >
                  <FiX size={16} />
                </DeleteButton>
                <CompareButton
                  type="button"
                  onClick={() =>
                    dispatch(addRepositoryRequest(repository.full_name))
                  }
                >
                  {loadingAddRepositoryRequest ? (
                    <FiClock size={16} />
                  ) : (
                    <FiTrendingUp size={16} />
                  )}
                </CompareButton>
              </li>
            ))}
          </RepositoryList>
        </RepositoriesPanel>
      </Main>
    </Container>
  );
};

export default Dashboard;
