import React from 'react';
import { fireEvent, render, RenderResult } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Dashboard from '.';
import {
  addRepositoryRequest,
  deleteRepository,
} from '../../store/modules/repository/actions';

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useDispatch: () => mockDispatch,
  useSelector: () => ({
    loadingAddRepositoryRequest: false,
    errorAddRepositoryRequest: false,
    repositories: [
      {
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
      },
    ],
  }),
}));

describe('Given that I’m in the Dashboard page', () => {
  let renderResult: RenderResult;

  beforeEach(() => {
    renderResult = render(<Dashboard />, { wrapper: BrowserRouter });
  });

  describe('when I click the delete repository button', () => {
    let deleteRepositoryButtonElement: HTMLButtonElement;

    beforeEach(() => {
      deleteRepositoryButtonElement = renderResult.getByTestId(
        'delete-repository-button',
      ) as HTMLButtonElement;

      fireEvent.click(deleteRepositoryButtonElement);
    });

    test('then a delete repository action should be requested', () => {
      expect(mockDispatch).toHaveBeenCalledWith(
        deleteRepository('some-user/some-repo'),
      );
    });
  });

  describe('when I have inserted a valid repository name', () => {
    let repositoryInputElement: HTMLInputElement;

    beforeEach(() => {
      repositoryInputElement = renderResult.getByTestId(
        'repository-input',
      ) as HTMLInputElement;

      fireEvent.change(repositoryInputElement, {
        target: { value: 'new-user/new-repo' },
      });
    });

    describe('when clicked the add button', () => {
      let addButtonElement: HTMLButtonElement;

      beforeEach(() => {
        addButtonElement = renderResult.container.querySelector(
          'button[type="submit"]',
        ) as HTMLButtonElement;

        // expect(addButtonElement).not.toBeNull();

        fireEvent.click(addButtonElement);
      });

      test('then the add repository action should be requested', () => {
        expect(mockDispatch).toHaveBeenCalledWith(
          addRepositoryRequest('new-user/new-repo'),
        );
      });
    });
  });
});
