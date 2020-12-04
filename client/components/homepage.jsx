const React = require('react');
const Video1 = require('./video1.jsx');
const LoginForm = require('./loginform.jsx');
const Testimonials = require('./testimonials.jsx');
const Logo = require('./logo.jsx');

class Homepage extends React.Component {
  constructor() {
    super();

    this.state = {};

  }

  render() {
    return (
      <div id="Homepage">
        <img id="watchVideo1" src="../../watchVideo.jpg" alt="Watch This Video"></img>
        < LoginForm />
        < Video1 />
        < Testimonials />
        <img id="guarantee" src="../../guarantee.png" alt="Money Back Guarantee"></img>
      </div>
    );
  }
}

module.exports = Homepage;