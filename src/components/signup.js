import React, { Component } from 'react';
import { Header, Form, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { Field, reduxForm } from 'redux-form';

class Signup extends Component {

    componentWillMount() {
      if(this.props.auth) {
        browserHistory.push('/');
      }
    }
    componentWillUpdate() {
      if(this.props.auth) {
        browserHistory.push('/');
      }
    }

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

  render() {
    return(
      <div>
        <Header as="h3">Enter Details</Header>
        <Form>
          <Form.Field>
            <Field
              label="Username:"
              type="text"
              name="username"
              placeholder="enter username"
              component={this.renderField}
            />
          </Form.Field>
          <Form.Field>
          <Field
            label="Email:"
            type="text"
            name="username"
            placeholder="enter email"
            component={this.renderField}
          />
          </Form.Field>
          <Form.Field>
          <Field
            label="Confirm Email:"
            type="text"
            name="email2"
            placeholder="confirm email"
            component={this.renderField}
          />
          </Form.Field>
          <Form.Field>
          <Field
            label="Password:"
            type="password"
            name="password"
            placeholder="enter password"
            component={this.renderField}
          />
          </Form.Field>
          <Form.Field>
          <Field
            label="Confirm Password:"
            type="password"
            name="password2"
            placeholder="confirm password"
            component={this.renderField}
          />
          </Form.Field>

          <Button type='submit'>Sign up</Button>
        </Form>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { auth: state.auth };
}

export default reduxForm({
  form:'SignupForm'
})
(connect(mapStateToProps)(Signup));
