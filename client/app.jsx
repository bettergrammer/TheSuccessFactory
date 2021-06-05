const React = require('react');
const ReactDOM = require('react-dom');
const Logo = require('./components/logo.jsx');
const Navbar = require('./components/navbar.jsx');
const Homepage = require('./components/homepage.jsx');
const Footer = require('./components/footer.jsx');
import SuccessPlan from './components/successplan.jsx';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      currentPage: Homepage
    };

    this.handleLinkClick = this.handleLinkClick.bind(this);
  }

  handleLinkClick(e) {
    if (e.target.innerHTML === `The Success Plan`) {
      this.setState({
        currentPage: SuccessPlan
      })
    } else if (e.target.innerHTML === `Home`) {
      this.setState({
        currentPage: Homepage
      })
    }
  }


  render() {
    return (
    <div class="app-container">
      < Logo />
      < Navbar handleLinkClick={this.handleLinkClick}/>
      {< this.state.currentPage />}
      < Footer />
    </div>
    );
  }
}

ReactDOM.render(< App />, document.getElementById('app'));