const React = require('react');
const Pagelinks = require('./pagelinks.jsx');

class Navbar extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div id="navbar">
        <p id="welcome">Welcome, to the start of a new chapter in your life...</p>
        < Pagelinks />
      </div>
    );
  }
}

module.exports = Navbar;