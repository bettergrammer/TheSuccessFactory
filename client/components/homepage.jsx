const React = require('react');

class Homepage extends React.Component {
  constructor() {
    super();

    this.state = {};

  }

  render() {
    return (
      <div id="Homepage">
        <iframe id="video1" src='../../testClip.mp4'
        frameborder='0'
        allow='autoplay; encrypted-media'
        allowfullscreen
        title='test video'
        />
      </div>
    );
  }
}

module.exports = Homepage;