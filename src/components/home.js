import React, { Component } from 'react';
import { Header, Container } from 'semantic-ui-react';

class Home extends Component {
  render() {
    return (
      <Container text textAlign="center">
        <Header as="h1">Access notes anytime anywhere</Header>
        <Header as="h4">With Notes App</Header>
        
      </Container>
    )
  }
}

export default Home;
