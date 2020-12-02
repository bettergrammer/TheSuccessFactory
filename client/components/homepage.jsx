const React = require('react');
const Video1 = require('./video1.jsx');
const LoginForm = require('./loginform.jsx');

class Homepage extends React.Component {
  constructor() {
    super();

    this.state = {};

  }

  render() {
    return (
      <div id="Homepage">
        < LoginForm />
        < Video1 />
      </div>
    );
  }
}

module.exports = Homepage;