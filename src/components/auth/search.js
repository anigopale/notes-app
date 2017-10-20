import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import { searchItems } from '../../actions';
import { connect } from 'react-redux';

class Search extends Component {
  constructor(props){
    super(props);
    this.state = { term: ""};
  }

  onInputChange(event) {
    this.setState({ term: event.target.value})
    console.log(this.state.term);
  }

  onFormSubmit() {
    this.props.searchItems(this.state.term);
    this.setState({ term: "" });
  }

  render() {
    return (
      <Form onSubmit={this.onFormSubmit.bind(this)}>
        <Form.Field>
          <input
            placeholder="search items"
            value={this.state.term}
            onChange={this.onInputChange.bind(this)}
            />
        </Form.Field>
      </Form>
    )
  }
}

export default connect(null,{ searchItems})(Search);
