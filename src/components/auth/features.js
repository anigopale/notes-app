import React, { Component } from 'react';
import Search from './search';
import { Menu, Segment } from 'semantic-ui-react';

class Features extends Component {
  constructor(props) {
    super(props);
    this.state={activename: "search"}
  }

  renderComponent() {
    if(this.state.activename == 'search')
      return <Search />
    return <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
  }

  render() {
    return (
      <div>
        <Menu tabular>
          <Menu.Item name="search" active={this.state.activename === 'search'} onClick={() => this.setState({activename: 'search'})} >
          </Menu.Item>
          <Menu.Item name="show" active={this.state.activename === 'show'} onClick={() => this.setState({activename: 'show'})} >
          </Menu.Item>
        </Menu>


          {this.renderComponent()}
        
      </div>
    );
  }
}

export default Features;
