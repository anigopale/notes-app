import React, { Component } from 'react';
import { Form, Segment, List, Button } from 'semantic-ui-react';
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
      <div>
        <Form onSubmit={this.onFormSubmit.bind(this)}>
          <Form.Group>
            <Form.Field>
              <input
                placeholder="search items"
                value={this.state.term}
                onChange={this.onInputChange.bind(this)}
                />
            </Form.Field>
            <Button>Search</Button>
          </Form.Group>
        </Form>
        <Segment vertical>
          <List divided relaxed>
            <List.Item>
              <List.Content>
                <List.Header>results will be shown here</List.Header>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Content>
                resuts will be shown here
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Content>
                resuts will be shown here
              </List.Content>
            </List.Item>
          </List>
        </Segment>
      </div>
    )
  }
}

export default connect(null,{ searchItems})(Search);
