import React from 'react';

import { Container, Header } from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Header>
        <img
          src="https://pngimg.com/uploads/github/github_PNG24.png"
          alt="Gitlist logo"
        />
      </Header>
      <p>Dashboard</p>
    </Container>
  );
};

export default Dashboard;
