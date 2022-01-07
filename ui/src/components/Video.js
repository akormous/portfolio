import React from 'react';
import BGVideo from '../images/sample_video4.mp4'
import Poster from '../images/poster.jpg'
import LazyLoad from 'react-lazyload'

const Video = () => {
    return(
        <LazyLoad>
        <video autoPlay loop muted playsInline
        poster={Poster}
        style={{
            position: 'absolute',
            width: '100%',
            left: '50%',
            top: '50%',
            height: '100%',
            objectFit: 'cover',
            transform: 'translate(-50%, -50%)',
            zIndex: '0',
            overflow: 'hidden'
        }}
        >
            <source src={BGVideo} type="video/mp4" />
        </video>
        </LazyLoad>
    );
}

export default Video;