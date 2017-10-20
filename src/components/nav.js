import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router';

class Nav extends Component {

  render() {
    console.log(this.props.getpath); // use this to show active routes in UI
    return (
      <div>
        <Menu>
          <Link to="/login">
            <Menu.Item
              name='login'
              active={this.props.getpath === '/login'}
              >
              Log in
            </Menu.Item>
          </Link>

          <Link to="/signup">
            <Menu.Item
              name='signup'
              active={this.props.getpath === '/signup'}
              >
              Sign up
            </Menu.Item>
          </Link>
        </Menu>
      </div>
    )
  }
}

export default Nav;
