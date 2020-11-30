const React = require('react');
const ReactDOM = require('react-dom');

class App extends React.Component {
  constructor() {
    super()

    this.state = {};
  }

  render() {
    return (
    <div>
      Hi, I am a React app.
    </div>
    );
  }
}

ReactDOM.render(< App />, document.getElementById('app'));