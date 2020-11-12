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
