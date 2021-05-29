import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function FriendsListItem(props) {
  // console.log(props);
  return (
    <div>
      <Link className="friends-item" to={`user/${props.friend._id}`}>
        <div className="friends-img">
          <img
            src="https://image.flaticon.com/icons/svg/2154/2154651.svg"
            alt="user-pic"
          />
        </div>
        <div className="friends-name">{props.friend.name}</div>
      </Link>
    </div>
  );
}
function mapStateToProps({ friends }) {
  return {
    friends,
  };
}

export default FriendsListItem;
