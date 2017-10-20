import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

class Nav extends Component {

  renderNav() {
    if( this.props.auth ){
      return (
        <Menu.Item>
          Sign out
        </Menu.Item>
      )
    }
    return [
      <Link to="/login">
        <Menu.Item
          active={this.props.getpath === '/login'}
          >
          Log in
        </Menu.Item>
      </Link>,
      <Link to="/signup">
        <Menu.Item
          active={this.props.getpath === '/signup'}
          >
          Sign up
        </Menu.Item>
      </Link>
    ];
  }

  render() {
    console.log("current route:",this.props.getpath); // use this to show active routes in UI
    console.log("auth status:", this.props.auth);
    return (
      <div>
        <Menu>
          {this.renderNav()}
        </Menu>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { auth: state.auth }
}

export default connect(mapStateToProps)(Nav);
