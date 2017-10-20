import React, { Component } from 'react';
import { Form, Button, Header } from 'semantic-ui-react';

class Login extends Component {
  render() {
    return (
      <div>
        <Header as="h3">Enter Details</Header>
        <Form>
          <Form.Field>
            <label>User Name:</label>
            <input placeholder='user name' />
          </Form.Field>
          <Form.Field>
            <label>Password:</label>
            <input type="password" placeholder='password' />
          </Form.Field>

          <Button type='submit'>Login</Button>
        </Form>
      </div>
    )
  }
}

export default Login;
