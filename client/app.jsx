const React = require('react');
const ReactDOM = require('react-dom');
const Logo = require('./components/logo.jsx');

class App extends React.Component {
  constructor() {
    super()

    this.state = {};
  }


  render() {
    return (
    <div>
      Hi, I am a React app.
      < Logo />
    </div>
    );
  }
}

ReactDOM.render(< App />, document.getElementById('app'));