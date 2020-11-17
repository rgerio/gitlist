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
  RepositoryTitleSection,
  RepositoryStatusSection,
  IssuesSection,
  IssuesList,
  AboutOwnerPanel,
  UserDetailsList,
  UserPublicRepoList,
} from './styles';

import api from '../../services/api';

import Header from '../../components/Header';

interface RepositoryParams {
  repository: string;
}

interface MinifiedUser {
  login: string;
  avatar_url: string;
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

interface Repository {
  full_name: string;
  description: string;
  owner: MinifiedUser;
  html_url: string;
  stargazers_count: number;
  watchers_count: number;
  forks_count: number;
  open_issues_count: number;
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
  };
  html_url: string;
}

interface Issue {
  id: number;
  html_url: string;
  title: string;
  user: MinifiedUser;
}

const Repository: React.FC = () => {
  const params = useParams<RepositoryParams>();
  const [repository, setRepository] = useState<Repository>();
  const [user, setUser] = useState<User>();
  const [latestRelease, setLatestRelease] = useState<Release>();
  const [latestCommit, setLatestCommit] = useState<Commit>();
  const [issues, setIssues] = useState<Issue[]>([]);

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

    api.get<Issue[]>(`repos/${params.repository}/issues`).then((response) => {
      setIssues(response.data);
    });
  }, [params.repository]);

  return (
    <Container>
      <Header backButtonShown />

      <Main>
        <RepositoryDetailsPanel>
          <RepositoryTitleSection
            target="_blank"
            rel="noopener noreferrer"
            href={repository ? repository.html_url : '/'}
          >
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
          </RepositoryTitleSection>

          <RepositoryStatusSection>
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

            {latestRelease && (
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={latestRelease.html_url}
                >
                  <div>
                    <FiTag size={12} />
                    <span>Latest release</span>
                  </div>
                  <strong>{latestRelease.tag_name}</strong>
                </a>
              </li>
            )}

            {latestCommit && (
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={latestCommit.html_url}
                >
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
                </a>
              </li>
            )}
          </RepositoryStatusSection>

          <IssuesSection>
            <h2>Open Issues</h2>
            <IssuesList>
              {issues.map((issue) => (
                <li key={issue.id}>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={issue.html_url}
                  >
                    <FiAlertCircle size={16} />
                    <div>
                      <strong>{issue.title}</strong>
                      <div>
                        <img
                          src={issue.user.avatar_url}
                          alt={issue.user.login}
                        />
                        <p>{issue.user.login}</p>
                      </div>
                    </div>
                  </a>
                </li>
              ))}
            </IssuesList>
          </IssuesSection>
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

            <h1>{user ? user.name || user.login : 'Loading...'}</h1>
            <h2>{user ? `(${user.login})` : 'Loading...'}</h2>
          </a>

          {user ? (
            <>
              <p>{user.bio}</p>

              <UserDetailsList>
                {user.location && (
                  <li>
                    <FiMapPin size={14} />
                    <span>{user.location}</span>
                  </li>
                )}

                {user.blog && (
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
                )}
              </UserDetailsList>

              <UserPublicRepoList>
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={`https://github.com/${user.login}`}
                  >
                    <div>
                      <FiGlobe size={12} />
                      <span>Repositories</span>
                    </div>
                    <strong>{user.public_repos}</strong>
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={`https://gist.github.com/${user.login}`}
                  >
                    <div>
                      <FiCode size={12} />
                      <span>Public Gists</span>
                    </div>
                    <strong>{user.public_gists}</strong>
                  </a>
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
