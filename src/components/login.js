import React, { Component } from 'react';
import { Form, Button, Header } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import { loginUser } from '../actions';
import { connect } from 'react-redux';

class Login extends Component {

  renderField(field) {

    return (
      <div>
        <label>{field.label}</label>
        <input
          {...field.input}
          type={field.type}
          placeholder={field.placeholder}
          />
      </div>
    )
  }

  onFormSubmit(values){
    console.log("submit handler:",values);
    this.props.loginUser(values);
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div>
        <Header as="h3">Enter Details</Header>
        <Form onSubmit={ handleSubmit(this.onFormSubmit.bind(this)) }>
          <Form.Field>
            <Field
              label="Username:"
              type="text"
              name="username"
              placeholder="enter username or email"
              component={this.renderField}
            />
          </Form.Field>
          <Form.Field>
            <Field
              label="Password:"
              name="password"
              placeholder="enter password"
              type="password"
              component={this.renderField}
            />
          </Form.Field>
          <Button type='submit'>Login</Button>
        </Form>
      </div>
    )
  }
}

export default reduxForm({
  form: 'LoginForm'
})(
  connect(null,{ loginUser })(Login)
);
