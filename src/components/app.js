import React, { Component } from 'react';
import Nav from './nav';
import { Header, Container, Divider } from 'semantic-ui-react';
import { Link } from 'react-router';

export default class App extends Component {
  render() {
    console.log(this.props.location.pathname);
    return (
      <Container>
          <Divider hidden />
          <Header as="h1">
            <Link to="/">Notes App</Link>
          </Header>
          <Nav getpath={this.props.location.pathname} />
          <Divider hidden />
          <Container text>
            {this.props.children}
        </Container>
      </Container>

    );
  }
}
