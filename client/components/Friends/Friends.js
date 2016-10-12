import React from 'react';
import Friend from './Friend';
import Messages from '../Messages/Messages';

// Connect
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as friendsMessages from '../../actions/friends';

function mapDispatchToProps(dispatch) {
  return bindActionCreators(friendsMessages, dispatch);
}

function mapStateToProps (state) {
  return {
    messages: state.messages,
    friends: state.friends
  }
}
// end Connect

class Friends extends React.Component {

  constructor() {
    super();
  }

  componentDidMount() {
    if (window.resizeItems) window.resizeItems();

    Ps.initialize(this.refs.friendList, {
      wheelSpeed: 2,
      wheelPropagation: true,
      minScrollbarLength: 20
    });
  }

  sortFriends() {
    this.players = [];
    this.playing = [];
    this.online  = [];
    this.offline = [];

    this.props.friends.map(el => {
      if (el.personastate == 0) {
        this.offline.push(el);
      }

      if (el.personastate > 0 && el.gameid != undefined) {
        this.playing.push(el);
      } else if (el.personastate == 1 || el.personastate == 2 || el.personastate == 3 || el.personastate == 4) {
        this.online.push(el);
      }
    });

    this.players = [...this.playing, ...this.online, ...this.offline];
  }

  render() {
    return (
      <div>
        <div className="col-md-4">
          <h1 className="title">Friends</h1>
          <ul ref="friendList" id="friend-list">

            {this.sortFriends.call(this)}

            {
              this.players.map((el) => {
                return <Friend key={el.steamid}
                               id={el.steamid}
                               name={el.personaname}
                               iconSrc={el.avatarmedium}
                               status={el.personastate}
                               playing={el.gameid}/>
              })
            }

          </ul>
          <input id="friend-list-search" placeholder="Search" />
        </div>
        <div className="col-md-8">
          <Messages />
        </div>
      </div>
    )
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Friends);