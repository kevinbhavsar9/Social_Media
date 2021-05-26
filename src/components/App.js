import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import jwtDecode from 'jwt-decode';

import { fetchPosts } from '../actions/posts';
import { Navbar, Home, Page404, Login, Signup } from './';

class App extends React.Component {
  componentDidMount() {
    console.log('component did mount');
    this.props.dispatch(fetchPosts());
    const token = localStorage.getItem('token');
    if (token) {
      const user = jwtDecode(token);
      console.log(user);
    }
  }

  render() {
    const { posts } = this.props;
    console.log(posts);
    return (
      <Router>
        <div>
          <Navbar />

          <Switch>
            <Route
              exact={true}
              path="/"
              render={(props) => {
                return <Home {...props} posts={posts} />;
              }}
            />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route component={Page404} />
          </Switch>
        </div>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
  };
}

App.propTypes = {
  posts: PropTypes.array.isRequired,
};
export default connect(mapStateToProps)(App);
