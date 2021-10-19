import React from 'react';
import { Container, Row } from 'react-bootstrap';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const FooterMusicPlayer = ({ song }) => {
  return (
    <footer>
      <div className='custom-ms'>
        <AudioPlayer
          autoPlay
          src={song}
          showSkipControls={true}
          showJumpControls={false}
        />
      </div>
    </footer>
  );
};

export default FooterMusicPlayer;
