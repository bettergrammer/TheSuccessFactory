const React = require('react');
const ReactDOM = require('react-dom');
const Logo = require('./components/logo.jsx');
const Navbar = require('./components/navbar.jsx');
const Homepage = require('./components/homepage.jsx');

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      currentPage: Homepage
    };
  }


  render() {
    return (
    <div>
      < Logo />
      < Navbar />
      <br/>
      {< this.state.currentPage />}
    </div>
    );
  }
}

ReactDOM.render(< App />, document.getElementById('app'));