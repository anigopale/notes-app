import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';

class Search extends Component {
  constructor(props){
    super(props);
    this.state = { term: ""};
  }

  onInputChange(event) {
    this.setState({ term: event.target.value})
    console.log(this.state.term);
  }

  render() {
    return (
      <Form onSubmit={() => this.props.searchItems(this.state.term)}>
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

export default Search;
