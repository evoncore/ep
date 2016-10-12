import React from 'react';

class SignUp extends React.Component {

  render() {
    return (
      <div className="col-md-4">
        <h1 className="title">Sign Up</h1>
        <div id="login-form" className="form">
          <input type="text" placeholder="Login" />
          <input type="text" placeholder="Password" />
          <button>Sign Up</button>
        </div>
      </div>
    )
  }

}

export default SignUp;