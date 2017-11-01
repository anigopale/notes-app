import React, { Component } from 'react';
import { Menu, Segment } from 'semantic-ui-react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { signoutUser } from '../actions';

class Nav extends Component {



  renderNav() {
    if( this.props.auth ){
      return [
        <Link to="/features">
          <Menu.Item active={this.props.getpath === '/features'}>
            Features
          </Menu.Item>
        </Link>,
        <Menu.Menu position="right">
          <Link to="/signout"  onClick={() => this.props.signoutUser() }>
            <Menu.Item>
              <Segment color="white">Sign out</Segment>
            </Menu.Item>
          </Link>
        </Menu.Menu>
      ];
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
        <Menu inverted secondary pointing>
          <Link to='/'>
            <Menu.Item active={this.props.getpath === '/'} name="Home" />
          </Link>
          {this.renderNav()}
        </Menu>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { auth: state.auth }
}

export default connect(mapStateToProps, { signoutUser })(Nav);
