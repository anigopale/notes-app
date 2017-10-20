import React, { Component } from 'react';
import { connect } from 'react-redux';

export default function(ComposedComponent) {
  class Authentication extends Component {
    static contextTypes = {
      router: React.PropTypes.object
    }

    componentWillMount() {
      if(!this.props.auth)
        this.context.router.push('/login');
    }
    componentWillUpdate(nextProps) {
      if(!nextProps.auth) {
        this.context.router.push('/login');
      }
    }

    render() {
      return <ComposedComponent {...this.props} />
    }
  }

  function mapStateToProps(state){
    return { auth: state.auth };
  }

  return connect(mapStateToProps)(Authentication);
}
