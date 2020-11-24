import React from 'react';
import { fireEvent, render, RenderResult } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Dashboard from '.';
import { addRepositoryRequest } from '../../store/modules/repository/actions';

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useDispatch: () => mockDispatch,
  useSelector: () => ({
    loadingAddRepositoryRequest: false,
    errorAddRepositoryRequest: false,
    repositories: [],
  }),
}));

describe('Given that I’m in the Dashboard page', () => {
  let renderResult: RenderResult;

  beforeEach(() => {
    renderResult = render(<Dashboard />, { wrapper: BrowserRouter });
  });

  describe('when I have inserted a valid repository name', () => {
    let repositoryInputElement: HTMLInputElement;

    beforeEach(() => {
      repositoryInputElement = renderResult.getByTestId(
        'repository-input',
      ) as HTMLInputElement;

      fireEvent.change(repositoryInputElement, {
        target: { value: 'my-username/my-repo' },
      });
    });

    describe('and clicked the add button', () => {
      let addButtonElement: HTMLButtonElement;

      beforeEach(() => {
        addButtonElement = renderResult.container.querySelector(
          'button[type="submit"]',
        ) as HTMLButtonElement;

        // expect(addButtonElement).not.toBeNull();

        fireEvent.click(addButtonElement);
      });

      test('then the repository should be requested', () => {
        expect(mockDispatch).toHaveBeenCalledWith(
          addRepositoryRequest('my-username/my-repo'),
        );
      });
    });
  });
});
