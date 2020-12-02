const React = require('react');

const LoginSheet = (props) => {
  return (
    <div id="loginsheet">
      <form>
            <h4 class="form-title">Login</h4>
            <label>username:</label>
            <input type="text" id="usernameInput"></input>
            <br/>
            <label>password:</label>
            <input type="text" id="passwordInput"></input>
            <button type="submit" class="login-form-button">Login</button>
            <button type="button" class="login-form-button">Sign Up!</button>
          </form>
    </div>
  );
};

module.exports = LoginSheet;