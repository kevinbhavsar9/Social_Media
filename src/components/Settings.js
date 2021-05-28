import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editProfile } from '../actions/profile';

class Settings extends Component {
  constructor(props) {
    super(props);
    console.log(props.auth);
    this.state = {
      id: props.auth.user.id,
      name: props.auth.user.name,
      password: '',
      confirm_password: '',
      editMode: false,
    };
  }

  handleChange = (fieldName, val) => {
    this.setState({
      [fieldName]: val,
    });
  };
  handleSavebtn = () => {
    console.log('save btn clickd');
    const { id, password, confirm_password, name } = this.state;
    this.props.dispatch(editProfile(id, password, confirm_password, name));
  };
  render() {
    const { user } = this.props.auth;
    const { editMode } = this.state;
    return (
      <div className="settings">
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
          </div>
        </div>

        <div className="field">
          <div classname="field-label">Name</div>
          {editMode ? (
            <input
              type="text"
              onChange={(e) => this.handleChange('name', e.target.value)}
              value={this.state.name}
              required
            />
          ) : (
            <div classname="field-value">
              <strong>{user.name}</strong>
            </div>
          )}
        </div>

        {editMode && (
          <div className="field">
            <div classname="field-label">New password</div>

            <input
              type="password"
              onChange={(e) => this.handleChange('password', e.target.value)}
              value={this.state.password}
              required
            />
          </div>
        )}

        {editMode && (
          <div className="field">
            <div classname="field-label">Confirm password</div>

            <input
              type="password"
              onChange={(e) =>
                this.handleChange('confirm_password', e.target.value)
              }
              value={this.state.confirm_password}
              required
            />
          </div>
        )}

        <div className="btn-grp">
          {editMode ? (
            <button className="button save-btn" onClick={this.handleSavebtn}>
              Save
            </button>
          ) : (
            <button
              className="button edit-btn"
              onClick={() => this.handleChange('editMode', true)}
            >
              Edit profile
            </button>
          )}

          {editMode && (
            <div
              className="go-back"
              onClick={() => this.handleChange('editMode', false)}
            >
              Go back
            </div>
          )}
        </div>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return {
    auth,
  };
}
export default connect(mapStateToProps)(Settings);
