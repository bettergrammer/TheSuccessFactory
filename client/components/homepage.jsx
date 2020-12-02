const React = require('react');
const Video1 = require('./video1.jsx');

class Homepage extends React.Component {
  constructor() {
    super();

    this.state = {};

  }

  render() {
    return (
      <div id="Homepage">
        < Video1 />
      </div>
    );
  }
}

module.exports = Homepage;