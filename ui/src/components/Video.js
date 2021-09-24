import React from 'react';
import BGVideo from '../images/sample_video2.mp4'

const Video = () => {
    return(
        <video autoPlay loop muted
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
    );
}

export default Video;