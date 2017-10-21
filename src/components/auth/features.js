import React, { Component } from 'react';
import Search from './search';
import Create from './create';
import { Menu, Segment, Grid } from 'semantic-ui-react';

class Features extends Component {
  constructor(props) {
    super(props);
    this.state={activename: "search"}
  }

  renderComponent() {
    if(this.state.activename == 'search')
      return <Search />
    if(this.state.activename == 'create')
      return <Create />
    return <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
  }

  render() {
    return (
      <div>
        <Grid>
          <Grid.Column width={4}>
            <Menu pointing vertical fluid secondary>
              <Menu.Item name="search" active={this.state.activename === 'search'} onClick={() => this.setState({activename: 'search'})} />
              <Menu.Item name="show" active={this.state.activename === 'show'} onClick={() => this.setState({activename: 'show'})} >
                Show All
              </Menu.Item>
              <Menu.Item name="create" active={this.state.activename === 'create'} onClick={() => this.setState({activename: 'create'})} />
            </Menu>
          </Grid.Column>

          <Grid.Column width={12}>
            {this.renderComponent()}
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default Features;
