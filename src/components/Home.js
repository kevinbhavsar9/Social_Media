import React, { Component } from 'react';
import { PostsList } from './';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class Home extends Component {
  render() {
    const { isLoggedin } = this.props.auth;
    if (!isLoggedin) {
      return <Redirect to="/login" />;
    }
    const { posts } = this.props;
    console.log(this.props);
    return (
      <div>
        <PostsList posts={posts} />
      </div>
    );
  }
}
function mapPropsToState(state) {
  return {
    auth: state.auth,
  };
}

export default connect(mapPropsToState)(Home);
