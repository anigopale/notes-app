import React, { Component } from 'react';
import Nav from './nav';
import { Header, Container, Divider, Segment } from 'semantic-ui-react';
import { Link } from 'react-router';

export default class App extends Component {
  render() {
    console.log(this.props.location.pathname);
    return (
      <div>
          <Segment inverted stackable>
            <Divider hidden />
            <Header as="h1">
              <Link to="/">Notes App</Link>
            </Header>
            <Nav getpath={this.props.location.pathname} />
          </Segment>
          <Divider hidden />
          <Container>
            {this.props.children}
        </Container>
        <Divider hidden/>
      </div>

    );
  }
}
