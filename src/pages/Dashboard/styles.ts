import styled from 'styled-components';

export const Container = styled.div``;

export const Header = styled.header`
  display: flex;
  position: relative;
  width: 100%;

  &::after {
    content: '';
    width: 100%;
    height: 1px;
    background: #eaeaea;
    position: absolute;
    bottom: 0;
    left: 0;
  }
`;

export const HeaderContent = styled.div`
  max-width: 1600px;
  width: 100%;
  margin: 0 auto;

  padding: 16px 32px;

  > img {
    height: 32px;
    // Change the PNG image color to white (Credit: https://codepen.io/sosuke/pen/Pjoqqp)
    /* filter: brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(2%)
      hue-rotate(222deg) brightness(105%) contrast(100%); */
  }
`;

export const Main = styled.main`
  display: flex;
  max-width: 1600px;
  margin: 0 auto;
`;

export const RepositoriesPanel = styled.aside`
  background: #fff;
  margin: 24px 16px;
  padding: 32px;
  border-radius: 8px;
  width: 25%;
  max-height: 750px;
`;

export const SectionTitle = styled.h2`
  font-size: 16px;
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
  background: #fff;
  margin: 24px 16px;
  padding: 32px;
  border-radius: 8px;
  width: 50%;
  min-height: 750px;

  > div {
    display: flex;
    align-items: center;
    margin-bottom: 48px;
    position: relative;

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
      width: 72px;
      height: 72px;
      border-radius: 50%;
      margin-right: 16px;
    }

    h2 {
      font-weight: 600;
      font-size: 24px;
    }
  }

  p {
    font-size: 16px;
  }
`;

export const AboutOwnerPanel = styled.aside`
  background: #333;
  margin: 24px 16px;
  padding: 32px;
  border-radius: 8px;
  width: 25%;
  max-height: 674px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin-top: 100px;
  padding-top: 96px;

  img {
    width: 160px;
    height: 160px;
    border-radius: 50%;
    margin-right: 16px;
    position: absolute;
    top: -80px;
  }

  h1 {
    font-weight: 600;
    font-size: 24px;
    color: #fff;
    text-align: center;
  }

  p {
    margin-top: 16px;
    font-size: 16px;
    color: #fff;
    text-align: center;
    line-height: 24px;
  }
`;
