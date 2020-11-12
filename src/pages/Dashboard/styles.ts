import styled from 'styled-components';

export const Container = styled.div``;

export const Header = styled.header`
  padding: 16px 32px;
  background: #28292e;
  display: flex;
  align-items: center;

  > img {
    height: 32px;
    // Change the PNG image color to white (Credit: https://codepen.io/sosuke/pen/Pjoqqp)
    filter: brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(2%)
      hue-rotate(222deg) brightness(105%) contrast(100%);
  }
`;

export const Main = styled.main`
  display: flex;
`;

export const RepositoriesPanel = styled.aside`
  background: #fff;
  margin: 24px 16px;
  padding: 16px;
  border-radius: 8px;
  width: 25%;
`;

export const SectionTitle = styled.h2`
  font-size: 16px;
  font-weight: 600;
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

export const RepositoriesList = styled.ul`
  list-style: none;

  li {
    a {
      color: #497fc0;
      text-decoration: none;
      font-weight: 600;
      display: flex;
      margin-bottom: 8px;

      svg {
        color: #70c54e;
        margin-right: 8px;
      }
    }
  }
`;

export const RepositoryDetailsPanel = styled.div`
  width: 50%;
`;

export const AboutOwnerPanel = styled.aside`
  width: 25%;
`;
