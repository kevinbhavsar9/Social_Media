import React, { Component } from 'react';
import { PostsList } from './';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import FriendsList from './FriendsList';

class Home extends Component {
  render() {
    const { isLoggedin } = this.props.auth;
    if (!isLoggedin) {
      return <Redirect to="/login" />;
    }
    const { posts } = this.props;
    const friends = this.props.friends;
    // friends.shift();

    return (
      <div className="poste">
        <PostsList posts={posts} />
        <FriendsList friends={friends} />
      </div>
    );
  }
}
function mapPropsToState(state) {
  return {
    auth: state.auth,
    friends: state.friends,
  };
}

export default connect(mapPropsToState)(Home);
