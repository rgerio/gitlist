import styled from 'styled-components';

export const Container = styled.div``;

export const Main = styled.main`
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
`;

export const RepositoryDetailsPanel = styled.div`
  background: #fff;
  margin: 24px 16px;
  padding: 32px;
  border-radius: 8px;
  width: 67%;
  min-height: 750px;
`;

export const RepositoryTitleSection = styled.a`
  display: flex;
  align-items: center;
  margin-bottom: 48px;
  position: relative;
  color: #000;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  &::after {
    content: '';
    width: 100%;
    height: 1px;
    background: #f5f5f5;
    margin: -16px;
    position: absolute;
    bottom: 0;
  }

  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }

  div {
    margin-left: 16px;

    h2 {
      font-weight: 600;
      font-size: 28px;
    }

    p {
      color: rgb(106, 115, 125);
      margin-top: 4px;
    }
  }
`;

export const RepositoryStatusSection = styled.ul`
  list-style: none;
  display: flex;
  margin-top: 56px;
  width: 100%;
  display: flex;
  justify-content: center;

  li {
    display: flex;
    flex-direction: column;
    padding: 16px;
    background: #aaaaaa20;
    flex: 1;
    max-width: 125px;
    border-radius: 8px;
    transition: background-color 0.2s;

    &:last-child {
      flex: 1.4;
      max-width: 160px;

      strong {
        font-size: 20px;
      }
    }

    &:hover {
      background-color: #aaaaaa40;
    }

    & + li {
      margin-left: 8px;
    }

    div {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 20px;

      svg {
        margin-right: 8px;
      }

      span {
        font-size: 12px;
      }
    }

    strong {
      font-size: 24px;
      margin-top: 8px;
      margin: 8px auto 0;
    }
  }

  a {
    display: flex;
    flex-direction: column;
    color: #000;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const IssuesSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;

  h2 {
    margin-bottom: 16px;
  }
`;

export const IssuesList = styled.ul`
  list-style: none;

  li {
    & + li {
      margin-top: 16px;
    }

    a {
      display: flex;
      text-decoration: none;
      color: #000;

      &:hover {
        text-decoration: underline;
      }

      svg {
        color: #6ec54c;
      }

      div {
        margin-left: 8px;

        strong {
        }

        div {
          display: flex;
          align-items: center;
          margin-top: 4px;

          img {
            border-radius: 50%;
            width: 20px;
            height: 20px;
          }

          p {
            margin-left: 8px;
            font-size: 14px;
          }
        }
      }
    }
  }
`;

export const AboutOwnerPanel = styled.aside`
  background: #333;
  margin: 24px 16px;
  padding: 32px;
  border-radius: 8px;
  width: 33%;
  max-height: 674px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin-top: 100px;
  padding-top: 96px;

  a {
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 160px;
      height: 160px;
      border-radius: 50%;
      position: absolute;
      top: -80px;
      margin: 0 auto;
    }

    h1 {
      font-weight: 600;
      font-size: 24px;
      color: #fff;
      text-align: center;
    }

    h2 {
      font-weight: 300;
      font-size: 14px;
      color: #fff;
      text-align: center;
    }
  }

  p {
    margin-top: 16px;
    font-size: 16px;
    color: #fff;
    text-align: center;
    line-height: 24px;
  }
`;

export const UserDetailsList = styled.ul`
  list-style: none;
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  li {
    display: flex;
    justify-content: center;
    align-items: center;

    & + li {
      margin-top: 16px;
    }

    svg {
      margin-right: 8px;
      color: #fff;
    }

    span {
      font-size: 14px;
      color: #fff;

      a {
        color: #fff;
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;

export const UserPublicRepoList = styled.ul`
  list-style: none;
  display: flex;
  margin-top: 56px;
  width: 100%;

  li {
    display: flex;
    flex-direction: column;
    padding: 16px;
    background: #aaaaaa10;
    flex: 1;
    border-radius: 8px;
    transition: background-color 0.2s;

    &:hover {
      background-color: #aaaaaa20;
    }

    & + li {
      margin-left: 8px;
    }

    div {
      display: flex;
      justify-content: center;
      align-items: center;

      svg {
        margin-right: 8px;
        color: #fff;
      }

      span {
        font-size: 12px;
        color: #fff;
      }
    }

    strong {
      font-size: 24px;
      color: #fff;
      margin-top: 8px;
      margin: 8px auto 0;
    }
  }
`;
