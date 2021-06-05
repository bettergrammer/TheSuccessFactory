const React = require('react');

const Videos = () => {
    return (
        <div class="videosContainer">
            <div class="videoContainer">
                <div class="heading">Sleep Success</div>
                <iframe class="SuccessPlanVideo" src='../../images/SuccessFactoryAd1.mp4'
                    frameborder='0'
                    allow='encrypted-media'
                    allowfullscreen
                    title='test video'
                />
            </div>
            <div class="videoContainer">
                <div class="heading">Physical Success</div>
                <iframe class="SuccessPlanVideo" src='../../images/SuccessFactoryAd1.mp4'
                    frameborder='0'
                    allow='autoplay; encrypted-media'
                    allowfullscreen
                    title='test video'
                />
            </div>
            <div class="videoContainer">
                <div class="heading">Mental Success</div>
                <iframe class="SuccessPlanVideo" src='../../images/SuccessFactoryAd1.mp4'
                    frameborder='0'
                    allow='autoplay; encrypted-media'
                    allowfullscreen
                    title='test video'
                />
            </div>
            <div class="videoContainer">
                <div class="heading">Relationship Success</div>
                <iframe class="SuccessPlanVideo" src='../../images/SuccessFactoryAd1.mp4'
                    frameborder='0'
                    allow='autoplay; encrypted-media'
                    allowfullscreen
                    title='test video'
                />
            </div>
        </div>
    );
};

export default Videos;