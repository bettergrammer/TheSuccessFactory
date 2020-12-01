const React = require('react');

class Navbar extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div id="navbar">
        <p id="welcome">Welcome, to the start of a new chapter in your life...</p>
        <ul>
          <li>Home</li>
          <li id="SP" class="animate__animated animate__rollIn">The Success Plan</li>
          <li>About Jason</li>
        </ul>
      </div>
    );
  }
}

module.exports = Navbar;