const React = require('react');

const Pagelinks = (props) => {
  return (
    <div id="Pagelinks">
      <ul>
        <li onClick={props.handleLinkClick}>Home</li>
        <li id="SP" onClick={props.handleLinkClick}>The Success Plan</li>
        <li onClick={props.handleLinkClick}>About Jason</li>
      </ul>
    </div>
  );
}

module.exports = Pagelinks;