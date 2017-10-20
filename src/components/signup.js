import React, { Component } from 'react';
import { Header, Form, Button, Message } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { Field, reduxForm } from 'redux-form';
import { signupUser, eraseMessage } from '../actions';

class Signup extends Component {
  constructor(props){
    super(props);
    this.props.eraseMessage();
  }

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

  onFormSubmit(values){
    this.props.signupUser(values);
    this.props.reset();
  }

  renderMessage() {
    if(this.props.message)
    return(
      <Message>
        <Message.Header>
          {this.props.message}
        </Message.Header>
      </Message>
    );
  }

  render() {
    const { handleSubmit } = this.props;
    return(
      <div>
        <Header as="h3">Enter Details</Header>
        <Form onSubmit={ handleSubmit(this.onFormSubmit.bind(this)) }>
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
            name="email"
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
          {this.renderMessage()}
        </Form>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { auth: state.auth, message: state.message };
}

export default reduxForm({
  form:'SignupForm'
})
(connect(mapStateToProps, { signupUser, eraseMessage })(Signup));
