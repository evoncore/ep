import React from 'react';

import Nav from './ui-items/nav/Nav';
import Footer from './ui-items/footer/Footer';

// Connect
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as messagesActions from '../actions/messages';
import * as friendsActions from '../actions/friends';

function mapDispatchToProps(dispatch) {
  return {
    messagesActions: bindActionCreators(messagesActions, dispatch),
    friendsActions: bindActionCreators(friendsActions, dispatch)
  }
}

function mapStateToProps (state) {
  return {
    messages: state.messages,
    friends: state.friends
  }
}
// end Connect

class App extends React.Component {

  constructor() {
    super();
  }

  componentWillMount() {
    this.props.messagesActions.fetchMessages();
    this.props.friendsActions.fetchFriends();
  }

  render() {
    return (
      <div>
        <div className="container" id="app">
          <Nav />
          {this.props.children}
        </div>
        {/*<div id="footer" className="container">*/}
          {/*<Footer />*/}
        {/*</div>*/}
      </div>
    )
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(App);