const React = require('react');

const LoginSheet = ({handleSwitch}) => {
  return (
    <div id="loginsheet">
      <form>
        <h4 class="form-title" id="login">Login</h4>
        <label id="usernameLabel">username:</label>
        <input type="text" id="usernameInput"></input>
        <label>password:</label>
        <input type="text" id="passwordInput"></input>
        <button type="submit" class="login-form-button loginID">Login</button>
        <button type="button" class="login-form-button" id="signupButton" onClick={handleSwitch}>Sign Up!</button>
        <button type="button" class="forgot-password">Forgot Password?</button>
        <img id="addToCart" src="../../addToCart.png" alt="Add To Cart"></img>
        <img src="../../watchVideo2.jpg" alt="Watch Video" id="watchVideo2"></img>
      </form>
    </div>
  );
};

module.exports = LoginSheet;