import React from 'react';

class Friend extends React.Component {

  constructor() {
    super();
  }

  sliceName() {
    var name = this.props.name;
    if (name.length > 16) {
      return name.slice(0, this.props.name.length -10) + ' ...';
    } else {
      return name;
    }
  }

  componentDidMount() {
    var offline = 0,
        online = 1,
        busy = 2,
        away = 3,
        snooze = 4,
        looking_to_trade = 5,
        looking_to_play = 6,
        playing = this.props.playing;

    if (playing != undefined) {
        this.refs.friendItem.classList.remove('offline');
        this.refs.friendItem.classList.remove('online');
        this.refs.friendItem.classList.add('playing');
    }

    switch (this.props.status) {
      case offline: {
        this.refs.friendItem.classList.remove('online');
        this.refs.friendItem.classList.add('offline');
          break;
      }
      case online: {
        this.refs.friendItem.classList.remove('offline');
        this.refs.friendItem.classList.add('online');
          break;
      }
      case busy: {
        this.refs.friendItem.classList.remove('offline');
        this.refs.friendItem.classList.add('online');
          break;
      }
      case away: {
        this.refs.friendItem.classList.remove('offline');
        this.refs.friendItem.classList.add('online');
          break;
      }
      case snooze: {
        this.refs.friendItem.classList.remove('online');
        this.refs.friendItem.classList.add('online');
          break;
      }
      case looking_to_trade: {
        this.refs.friendItem.classList.remove('offline');
        this.refs.friendItem.classList.add('online');
          break;
      }
      case looking_to_play: {
        this.refs.friendItem.classList.remove('offline');
        this.refs.friendItem.classList.add('online');
        break;
      }
      default: {
        this.refs.friendItem.classList.remove('online');
        this.refs.friendItem.classList.add('offline');
          break;
      }
    }
  }

  render() {
    return (
      <li className="friend-item"
          data-id={this.props.id}
          ref="friendItem">
        <img src={this.props.iconSrc} className="friend-icon" />
        <p className="friend-name">{this.sliceName.call(this)}</p>
        <a href="#" onClick={this.props.onClick} className="small-button delete-icon icon-user-minus"></a>
        <a href="#" onClick={this.props.onClick} className="small-button dialog-icon icon-bubbles2"></a>
        <a href="#" onClick={this.props.onClick} className="small-button profile-icon icon-profile"></a>
      </li>
    )
  }

}

export default Friend;