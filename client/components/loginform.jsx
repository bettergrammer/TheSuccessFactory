const React = require('react');
const LoginSheet = require('./loginsheet.jsx');

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      currentForm: LoginSheet
    };
  }

  render() {
    return (
      <div id="loginform">
        {< this.state.currentForm />}
      </div>
    );
  }
}

module.exports = LoginForm;