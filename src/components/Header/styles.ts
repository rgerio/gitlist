import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  position: relative;
  width: 100%;

  &::after {
    content: '';
    width: 100%;
    height: 1px;
    background: #e6e6e6;
    position: absolute;
    bottom: 0;
    left: 0;
  }
`;

export const HeaderContent = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;

  padding: 16px 32px;

  > img {
    height: 36px;
  }
`;
