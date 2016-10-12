import React from 'react';
import { Link } from 'react-router';
import userSigned from '../../../auth';

// Connect
import { connect } from 'react-redux';

function mapStateToProps (state) {
  return {
    messages: state.messages,
  }
}
// end Connect

class Nav extends React.Component {

  constructor() {
    super();

    this.state = {
      isOpen: true,
      styles: {}
    };
  }

  componentDidMount() {
    // Animate Border
    this.links = document.querySelectorAll('#context-menu ul a');
    this.borderLeft = this.refs.borderLeft;

    // Set default border-left position
    if (this.links.length > 0 && this.state.isOpen) {

      for (let i = 0; i < this.links.length; i++) {
        if (this.links[i].classList.contains('active')) {
          this.borderLeft.style.top = this.links[i].offsetTop + 'px';
        }
      }

      this.borderLeft.style.height = getComputedStyle(this.links[0]).height;
    }

    for (let i = 0; i < this.links.length; i++) {
      this.links[i].addEventListener('click', function() {
        document.querySelector('#context-menu .before').style.top = this.offsetTop + 'px';
      });
    }
  }

  componentWillUnmount() {
    for (let i = 0; i < this.links.length; i++) {
      this.links[i].removeEventListener('click');
    }
  }

  renderNav() {
    if (userSigned) {
      return (
        <ul>
          <div className="before" ref="borderLeft"></div>
          <li><Link to="/" className="icon icon-home" activeClassName="active"><i className="link-text">Home</i></Link></li>
          <li><Link to="/news" className="icon icon-newspaper" activeClassName="active"><i className="link-text">Settings</i></Link></li>
          <li>
            <Link to="/friends" className="icon icon-users" activeClassName="active">
              <b id="message-counter">{this.props.messages.length > 0 ? this.props.messages.length : ''}</b>
              <i className="link-text">Messages</i>
            </Link>
          </li>

          <li><Link to="/settings" className="icon icon-cog" activeClassName="active"><i className="link-text">Settings</i></Link></li>
        </ul>
      )
    } else {
      return(
      <ul>
        <div className="before" ref="borderLeft"></div>
        <li><Link to="/" className="icon icon-key" activeClassName="active"><i className="link-text">Home</i></Link></li>
        <li><Link to="/news" className="icon icon-newspaper" activeClassName="active"><i className="link-text">Settings</i></Link></li>
      </ul>
      )
    }
  }

  render() {
    return (
      <nav  className={this.state.isOpen ? 'show' : 'hide'}
        style={this.state.styles}
        ref="contextMenu"
        id="context-menu">

        { this.renderNav() }
      </nav>
    )
  }

}

export default connect(mapStateToProps)(Nav);
