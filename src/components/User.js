import React, { Component } from 'react';
import { Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchFriends, removeFriend, addFriend } from '../actions/friends';
import { fetchUserById } from '../actions/user';

import { APIUrls } from '../helpers/url';

class User extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }
  componentDidMount() {
    const userId = this.props.match.params.userId;
    this.props.dispatch(fetchUserById(userId));
  }
  checkForFriend() {
    const friendsArray = this.props.friends;
    const userId = this.props.match.params.userId;
    console.log(friendsArray);
    const friendIdArray = friendsArray.map((friend) => friend.to_user._id);
    const index = friendIdArray.indexOf(userId);
    if (index !== -1) {
      return true;
    }
    return false;
  }

  handleFriendBtn = async (friendId) => {
    const token = localStorage.getItem('token');
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Bearer ${token}`,
      },
    };
    const url = APIUrls.addFriend(friendId);

    const response = await fetch(url, options);
    const data = await response.json();

    if (data.success) {
      this.props.dispatch(addFriend(data.data.friendship));
    }
  };
  handleRemoveFriendBtn = async (friendId) => {
    const token = localStorage.getItem('token');
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Bearer ${token}`,
      },
    };
    const url = APIUrls.removeFriend(friendId);

    const response = await fetch(url, options);
    const data = await response.json();

    if (data.success) {
      this.props.dispatch(removeFriend(friendId));
    }
  };

  render() {
    // this.checkForFriend();
    const { user, inProcess } = this.props.user;
    // console.log(inProcess);
    const userId = this.props.match.params.userId;

    return (
      <div className="settings">
        {inProcess ? (
          <div>Loading...</div>
        ) : (
          <Fragment>
            <div className="img-container">
              <img
                src="https://image.flaticon.com/icons/svg/2154/2154651.svg"
                alt="user-dp"
              />
            </div>
            <div className="field">
              <div classname="field-label">Email</div>
              <div classname="field-value">
                <strong>{user.email}</strong>
                {/* <strong>user.email</strong> */}
              </div>
            </div>
            <div className="field">
              <div classname="field-label">Name</div>
              <div classname="field-value">
                <strong>{user.name}</strong>
                {/* <strong>user.name</strong> */}
              </div>
            </div>
            <div className="btn-grp">
              {this.checkForFriend() ? (
                <button
                  className="button edit-btn"
                  onClick={() => this.handleRemoveFriendBtn(userId)}
                >
                  Remove Friend
                </button>
              ) : (
                <button
                  className="button edit-btn"
                  onClick={() => this.handleFriendBtn(userId)}
                >
                  Add Friend
                </button>
              )}
            </div>
          </Fragment>
        )}
      </div>
    );
  }
}

function mapStateToProps({ user, friends }) {
  return {
    user,
    friends,
  };
}
export default connect(mapStateToProps)(User);
