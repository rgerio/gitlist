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
  width: 33%;
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
