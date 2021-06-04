const React = require('react');

const RegisterSheet = ({handleSwitch}) => {
  return  (
    <div class="registerSheetContainer">
      <form class="registerSheet">
        <h4 class="form-title" id="register">Register</h4>
        <label class="register" id="firstNameLabel">first name:</label>
        <input  type="text" id="firstNameInput"></input>
        <label class="register" id="lastNameLabel">last name:</label>
        <input  type="text" id="lastNameInput"></input>
        <label class="register" id="emailLabel">email:</label>
        <input  type="text" id="emailInput"></input>
        <label class="register" id="registerUsernameLabel">username:</label>
        <input type="text" id="registerUsernameInput"></input>
        <label class="register" id="registerUsernameInput">password:</label>
        <input type="text" id="registerPasswordInput"></input>
        <div class="registerButtonsContainer">
          <button class="registerButton" type="button" class="login-form-button loginID">Submit</button>
          <button class="registerButton" type="button" class="login-form-button" id="signupButton" onClick={handleSwitch}>
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

module.exports = RegisterSheet;