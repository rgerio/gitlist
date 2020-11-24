import React, { useCallback, useState } from 'react';
import { FiChevronRight, FiClock, FiPlus, FiX } from 'react-icons/fi';
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
  GreenButton,
  Input,
} from './styles';

import Header from '../../components/Header';

import { RootState } from '../../store/modules/rootReducer';
import {
  addRepositoryRequest,
  deleteRepository,
} from '../../store/modules/repository/actions';

const Dashboard: React.FC = () => {
  const {
    loadingAddRepositoryRequest,
    errorAddRepositoryRequest,
    repositories,
  } = useSelector((state: RootState) => state.repository);
  const dispatch = useDispatch();

  const [repositoryToAdd, setRepositoryToAdd] = useState('');
  const [
    hasRepositoryToAddInputFocus,
    setHasRepositoryToAddInputFocus,
  ] = useState(false);

  const handleAddRepository = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      dispatch(addRepositoryRequest(repositoryToAdd));
    },
    [dispatch, repositoryToAdd],
  );

  const handleChangeAddRepositoryInput = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setRepositoryToAdd(event.target.value);
    },
    [],
  );

  const handleDeleteRepository = useCallback(
    (repository: string) => {
      dispatch(deleteRepository(repository));
    },
    [dispatch],
  );

  return (
    <Container>
      <Header />

      <Main>
        <RepositoriesPanel>
          <SectionTitle>Repositories</SectionTitle>

          <Form onSubmit={handleAddRepository}>
            <Input
              data-testid="repository-input"
              placeholder="Type a repository name..."
              value={repositoryToAdd}
              onChange={handleChangeAddRepositoryInput}
              onFocus={() => setHasRepositoryToAddInputFocus(true)}
              onBlur={() => setHasRepositoryToAddInputFocus(false)}
              hasError={
                errorAddRepositoryRequest && !hasRepositoryToAddInputFocus
              }
            />
            <GreenButton type="submit" disabled={loadingAddRepositoryRequest}>
              {loadingAddRepositoryRequest ? (
                <>
                  <FiClock size={16} />
                  Wait...
                </>
              ) : (
                <>
                  <FiPlus size={16} />
                  Add
                </>
              )}
            </GreenButton>
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
                  data-testid="delete-repository-button"
                  type="button"
                  onClick={() => handleDeleteRepository(repository.full_name)}
                >
                  <FiX size={16} />
                </DeleteButton>
              </li>
            ))}
          </RepositoryList>
        </RepositoriesPanel>
      </Main>
    </Container>
  );
};

export default Dashboard;
