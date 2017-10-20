import React, { Component } from 'react';
import { Header, Form, Button } from 'semantic-ui-react';

class Signup extends Component {
  render() {
    return(
      <div>
        <Header as="h3">Enter Details</Header>
        <Form>
          <Form.Field>
            <label>User Name:</label>
            <input placeholder='user name' />
          </Form.Field>
          <Form.Field>
            <label>Email:</label>
            <input placeholder='email' />
          </Form.Field>
          <Form.Field>
            <label>Password:</label>
            <input type="password" placeholder='password' />
          </Form.Field>
          <Form.Field>
            <label>Confirm Password:</label>
            <input type="password" placeholder='password' />
          </Form.Field>

          <Button type='submit'>Sign up</Button>
        </Form>
      </div>
    )
  }
}

export default Signup;
