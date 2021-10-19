import React from 'react';
import { Container, Row } from 'react-bootstrap';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { useDispatch, useSelector } from 'react-redux';

const FooterMusicPlayer = () => {
  const dispatch = useDispatch();
  const songDetails = useSelector((state) => state.songDetails);
  const songList = useSelector((state) => state.songList);
  const { songs } = songList;
  return (
    <footer>
      <div className='custom-ms'>
        <AudioPlayer
          autoPlay
          src={songDetails.song.musicUrl}
          showSkipControls={true}
          showJumpControls={false}
        />
      </div>
    </footer>
  );
};

export default FooterMusicPlayer;
