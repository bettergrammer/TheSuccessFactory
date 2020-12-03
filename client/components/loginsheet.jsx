const React = require('react');

const LoginSheet = (props) => {
  return (
    <div id="loginsheet">
      <form>
            <h4 class="form-title">Login</h4>
            <label id="usernameLabel">username:</label>
            <input type="text" id="usernameInput"></input>
            <br/>
            <label>password:</label>
            <input type="text" id="passwordInput"></input>
            <button type="submit" class="login-form-button">Login</button>
            <button type="button" class="login-form-button">Sign Up!</button>
            <button type="button" class="forgot-password">Forgot Password?</button>
            <img src="../../watchVideo2.jpg" alt="Watch Video" id="watchVideo2"></img>
          </form>
    </div>
  );
};

module.exports = LoginSheet;