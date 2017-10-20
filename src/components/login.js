import React, { Component } from 'react';
import { Form, Button, Header, Message, Icon } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import { loginUser, eraseMessage } from '../actions';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { loading : false }
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
    this.setState({loading: true})
    console.log("submit handler:",values);
    this.props.loginUser(values);
    this.props.reset();
  }

  renderError() {
    if(this.props.error) {
      return(
        <Message>
          <Message.Header>
            {this.props.error}
          </Message.Header>
          <p>Don't have an account? Sign up!</p>
        </Message>
      )
    }
  }
  renderLoading() {
    if(this.state.loading && this.props.error == "")
    return (<Icon name='circle notched' loading />)
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
          {this.renderError()}
          {this.renderLoading()}
        </Form>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { auth: state.auth , error: state.message }
}

export default reduxForm({
  form: 'LoginForm'
})(
  connect(mapStateToProps,{ loginUser, eraseMessage })(Login)
);
