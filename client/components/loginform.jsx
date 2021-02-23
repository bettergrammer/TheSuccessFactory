const React = require('react');
const LoginSheet = require('./loginsheet.jsx');
const RegisterSheet = require('./registersheet.jsx');

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      currentForm: LoginSheet
    };
  }

  handleSwitch(e) {
    console.log('sign up!');
    this.setState((prevState, props) => {
      if (prevState.currentForm === LoginSheet) {
        return {
          currentForm: RegisterSheet
        }
      } else {
        return {
          currentForm: LoginSheet
        }
      }
    });
  }

  render() {
    return (
      <div id="loginform">
        {< this.state.currentForm handleSwitch={this.handleSwitch.bind(this)}/>}
        <img src="../../images/watchVideo2.jpg" alt="Watch Video" id="watchVideo2"></img>
      </div>
    );
  }
}

module.exports = LoginForm;