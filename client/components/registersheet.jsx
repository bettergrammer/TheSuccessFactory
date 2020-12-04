const React = require('react');

const RegisterSheet = ({handleSwitch}) => {
  return  (
    <div id="registersheet">
      <form id="registerSheet">
        <h4 class="form-title" id="register">Register</h4>
        <label class="register" id="firstNameLabel">first name:</label>
        <input  type="text" id="firstNameInput"></input>
        <label class="register" id="lastNameLabel">last name:</label>
        <input  type="text" id="lastNameInput"></input>
        <label class="register" id="emailLabel">email:</label>
        <input  type="text" id="emailInput"></input>
        <button class="registerButton" type="button" class="login-form-button loginID">Sign Up!</button>
        <button class="registerButton" type="button" class="login-form-button" id="signupButton" onClick={handleSwitch}>
          Login
        </button>
        <img id="addToCart2" src="../../buyNow2.jpg" alt="Add To Cart"></img>
      </form>
    </div>
  );
};

module.exports = RegisterSheet;