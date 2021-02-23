const React = require('react');

const Video1 = () => {
  return (
    <iframe id="video1" src='../../images/testClip.mp4'
      frameborder='0'
      allow='autoplay; encrypted-media'
      allowfullscreen
      title='test video'
      />
  );
}

module.exports = Video1;