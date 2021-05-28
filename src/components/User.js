import React, { Component } from 'react';
import { Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchUserById, addFriend } from '../actions/user';

class User extends Component {
  //   constructor(props) {
  //     super(props);
  //     console.log(props);
  //   }

  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log('component did mount');
    const userId = this.props.match.params.userId;
    this.props.dispatch(fetchUserById(userId));
  }

  handleFriendBtn(friendId) {
    this.props.dispatch(addFriend(friendId));
  }

  render() {
    const { user, inProcess } = this.props.user;
    console.log(inProcess);
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
              <button
                className="button edit-btn"
                onClick={() => this.handleFriendBtn(userId)}
              >
                Add Friend
              </button>
            </div>
          </Fragment>
        )}
      </div>
    );
  }
}

function mapStateToProps({ user }) {
  return {
    user,
  };
}
export default connect(mapStateToProps)(User);
