import React, { Component } from 'react';
import Search from './search';
import Create from './create';
import Show from './show';
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
    if(this.state.activename == 'show')
      return <Show />
  }

  render() {
    return (
      <div>


            <Menu fluid secondary>
              <Menu.Item name="search" active={this.state.activename === 'search'} onClick={() => this.setState({activename: 'search'})} />
              <Menu.Item name="show" active={this.state.activename === 'show'} onClick={() => this.setState({activename: 'show'})} >
                Show All
              </Menu.Item>
              <Menu.Item name="create" active={this.state.activename === 'create'} onClick={() => this.setState({activename: 'create'})} />
            </Menu>



            {this.renderComponent()}


      </div>
    );
  }
}

export default Features;
