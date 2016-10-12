import React from 'react';
import Message from './Message';

// Connect
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as messagesActions from '../../actions/messages';

function mapDispatchToProps(dispatch) {
  return bindActionCreators(messagesActions, dispatch);
}

function mapStateToProps (state) {
  return {
    messages: state.messages,
    friends: state.friends
  }
}
// end Connect

class Messages extends React.Component {

  constructor() {
    super();

    this.state = {
      messageName: 'Vladimir',
      messageText: '',
    }
  }

  componentDidMount() {
    if (window.resizeItems) window.resizeItems();
    var container = this.refs.messageList;

    Ps.initialize(container, {
      wheelSpeed: 2,
      wheelPropagation: true,
      minScrollbarLength: 20
    });
  }

  handleMessage(e) {
    this.setState({
      messageText: e.target.value,
    });
  }

  handleMessageSubmit() {
    if (this.state.messageText !== '') {
      var message = {
        user_name: this.state.messageName,
        message: this.state.messageText,
      }

      this.props.addMessage(message);

      this.setState({
        messageText: '',
      });
    }
  }

  keyCodeMessage(e) {
    // if (e.ctrlKey && e.keyCode == 13) {
      // Ctrl-Enter pressed
    // }

    switch (e.which) {
      case 13: {
        e.preventDefault();
        this.handleMessageSubmit();

        break;
      }
    }
  }

  showSendIconOnTyping(e) {
    if (e.target.value.length > 0) {
      this.refs.sendIcon.classList.add('show');
    } else {
      this.refs.sendIcon.classList.remove('show');
    }
  }

  removeMessage(e) {
    e.preventDefault();
    this.props.removeMessage(e.target.closest('li').dataset.id);
  }

  render() {
    return (
      <div>
        {/* Messages list */}
        <h1 className="title">Messages</h1>
        <ul id="message-list" className="messages-list" ref="messageList">
          {
            this.props.messages.map((el) => {
              return <Message onClick={this.removeMessage.bind(this)}
                              key={el.id}
                              id={el.id}
                              user_name={el.user_name}
                              message={el.message} />
            })
          }
        </ul>

        {/* Create message form */}
        <div id="addMessage">
          <textarea onKeyUp={this.showSendIconOnTyping.bind(this)}
                    onKeyPress={this.keyCodeMessage.bind(this)}
                    onChange={this.handleMessage.bind(this)}
                    className="text"
                    placeholder="Type your text here..."
                    value={this.state.messageText}>
          </textarea>
          <button onClick={this.handleMessageSubmit.bind(this)} ref="sendIcon" className="send icon-arrow-right2"></button>
        </div>
      </div>
    )
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Messages);