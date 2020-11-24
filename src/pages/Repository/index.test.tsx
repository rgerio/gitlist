import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import MockAdapter from 'axios-mock-adapter';

import { act } from 'react-dom/test-utils';
import Repository from '.';
import api from '../../services/api';

const mockApi = new MockAdapter(api);

describe('Given that I’m in the Repository page', () => {
  beforeEach(() => {
    mockApi.onGet('repos/some-user/some-repo').reply(200, {
      full_name: 'some-user/some-repo',
      description: 'some-description',
      owner: {
        login: 'some-user',
        avatar_url: 'some-avatar-url',
      },
      html_url: 'some-url-html',
      stargazers_count: 0,
      watchers_count: 0,
      forks_count: 0,
      open_issues_count: 0,
    });

    mockApi.onGet('users/some-user').reply(200, {
      login: 'some-user',
      name: 'some-user',
      bio: 'some-bio-text',
      html_url: 'some-url-html',
      location: 'somewhere',
      blog: 'some-blog-url',
      public_repos: 0,
      public_gists: 0,
    });

    mockApi.onGet('repos/some-user/some-repo/releases').reply(200, [
      {
        html_url: 'some-html-url',
        tag_name: 'some-tag-name',
        published_at: '2020-01-01 00:00',
      },
    ]);

    mockApi.onGet('repos/some-user/some-repo/commits').reply(200, [
      {
        commit: {
          author: {
            date: '2020-01-01 00:00',
          },
        },
        html_url: 'some-html-url',
      },
    ]);

    mockApi.onGet('repos/some-user/some-repo/issues').reply(200, [
      {
        id: 1,
        html_url: 'some-html-url',
        title: 'some-issue',
        user: {
          login: 'some-user',
          avatar_url: 'some-avatar-url',
        },
      },
    ]);
  });

  describe('when I query a valid repository', () => {
    beforeEach(async () => {
      await act(async () =>
        render(
          <MemoryRouter initialEntries={['/repository/some-user/some-repo']}>
            <Route path="/repository/:repository+" component={Repository} />
          </MemoryRouter>,
        ),
      );
    });

    test('then it renders the open issues', () => {
      const textElement = screen.getByText('some-issue');
      expect(textElement).toBeInTheDocument();
    });
  });
});
