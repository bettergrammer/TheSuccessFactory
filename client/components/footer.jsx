const React = require('react');
const Pagelinks = require('./pagelinks.jsx');

const Footer = () => {
  return (
    <div id="Footer">
      < Pagelinks />
      <p id="copywright">© The Success Factory, 2020</p>
    </div>
  );
}

module.exports = Footer;