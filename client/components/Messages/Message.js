import React from 'react';

class Message extends React.Component {

  render() {
    return (
      <li className="message-item"
          data-id={this.props.id}>
        <p className="message-user-name">{this.props.user_name}</p>
        <p>{this.props.message}</p>

        <a href="#" onClick={this.props.onClick} className="small-button delete-item icon-cross"></a>
      </li>
    )
  }

}

export default Message;