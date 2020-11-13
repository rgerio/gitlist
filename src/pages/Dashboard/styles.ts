import styled from 'styled-components';

export const Container = styled.div``;

export const Main = styled.main`
  display: flex;
  justify-content: center;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
`;

export const RepositoriesPanel = styled.aside`
  background: #fff;
  margin: 24px 16px;
  padding: 32px;
  border-radius: 8px;
  max-width: 700px;
  width: 100%;
`;

export const SectionTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 16px;
`;

export const Form = styled.form`
  margin: 8px 0 16px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  input {
    background: #f5f5f5;
    border: none;
    padding: 16px;
    border-radius: 8px;
    width: 100%;

    &::placeholder {
      color: #afafaf;
    }
  }

  button {
    height: 48px;
    border-radius: 8px;
    background: #6ec54c;
    border: none;
    padding: 0 16px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    margin-left: 8px;

    svg {
      color: #fff;
      margin-right: 8px;
    }
  }
`;

export const RepositoryList = styled.ul`
  list-style: none;

  li {
    background: #f5f5f5;
    border-radius: 8px;
    width: 100%;
    padding: 24px;
    text-decoration: none;
    align-items: center;
    transition: transform 0.2s, background-color 0.2s;
    position: relative;

    &:hover {
      transform: translateX(10px);
      background: #eee;

      &::before {
        content: '';
        width: 10px;
        height: 100%;
        background: #6ec54c;
        position: absolute;
        left: 0;
        top: 0;
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
      }
    }

    & + li {
      margin-top: 16px;
    }

    a {
      color: #497fc0;
      text-decoration: none;
      font-weight: 600;
      display: flex;
      margin-bottom: 8px;

      img {
        width: 48px;
        height: 48px;
        border-radius: 50%;
        margin-right: 16px;
        border: 1px solid rgba(0, 0, 0, 0.3);
      }

      svg {
        color: #70c54e;
        margin-right: 8px;
      }
    }
  }
`;
