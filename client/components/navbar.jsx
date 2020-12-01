const React = require('react');

class Navbar extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div id="navbar" class="animate__animated animate__fadeInTopRight">
        <p id="welcome">Welcome, to the start of a new chapter in your life...</p>
        <ul>
          <li class="animate__animated animate__rollIn">Home</li>
          <li id="SP" class="animate__animated animate__rollIn">The Success Plan</li>
          <li class="animate__animated animate__rollIn">About Jason</li>
        </ul>
      </div>
    );
  }
}

module.exports = Navbar;