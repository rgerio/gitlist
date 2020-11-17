import styled from 'styled-components';

export const Container = styled.div``;

export const Main = styled.main`
  display: flex;
  justify-content: center;
  max-width: 1200px;
  width: 100%;
  min-width: 380px;
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

  @media (max-width: 480px) {
    flex-direction: column;
  }

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

    @media (max-width: 480px) {
      width: 100%;
      margin-left: 0px;
      margin-top: 8px;
    }

    svg {
      color: #fff;
      margin-right: 8px;
    }
  }
`;

export const RepositoryList = styled.ul`
  list-style: none;
  margin-top: 24px;

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

      a svg {
        color: #00000055;
      }

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
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 8px;

      div {
        display: flex;
        align-items: center;
        margin-right: 8px;

        img {
          width: 56px;
          height: 56px;
          min-width: 56px;
          border-radius: 50%;
          margin-right: 16px;
          border: 1px solid rgba(0, 0, 0, 0.1);
        }

        div {
          display: flex;
          flex-direction: column;
          align-items: flex-start;

          h2 {
            color: #497fc0;
            font-weight: 600;
            font-size: 20px;
          }

          p {
            margin-top: 4px;
            font-size: 16px;
          }
        }
      }

      svg {
        color: #00000030;
      }
    }

    button {
      position: absolute;
      top: 4px;
      right: 4px;
      border: none;
      background: none;
      padding: 8px;
      border-radius: 50%;

      &:hover {
        background: #00000020;
        svg {
          color: #000000;
        }
      }

      svg {
        color: #00000030;
      }
    }
  }
`;
