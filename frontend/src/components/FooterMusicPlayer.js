import React, { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { Avatar } from '@material-ui/core';
import Button from '@material-ui/core/Button';

const FooterMusicPlayer = () => {
  const dispatch = useDispatch();
  const songDetails = useSelector((state) => state.songDetails);
  const songList = useSelector((state) => state.songList);
  const [musicurl, setmusicurl] = useState('');
  const [musicid, setmusicid] = useState('');
  const [musicname, setmusicname] = useState('');
  const [musicartist, setmusicartist] = useState('');
  const [musicposter, setmusicposter] = useState('');
  const { songs } = songList;
  const nextClicked = () => {
    var index =
      (songs.map((song) => song.musicId).indexOf(musicid) + 1) % songs.length;
    setmusicurl(songs[index].musicUrl);
    setmusicid(songs[index].musicId);
    setmusicname(songs[index].musicName);
    setmusicposter(songs[index].musicPosterUrl);
    setmusicartist(songs[index].musicArtist);
  };
  const prevClicked = () => {
    var index =
      (songs.map((song) => song.musicId).indexOf(musicid) - 1) % songs.length;
    if (index - 1 < 0) {
      index = songs.length - 1;
    }
    setmusicurl(songs[index].musicUrl);
    setmusicid(songs[index].musicId);
    setmusicname(songs[index].musicName);
    setmusicposter(songs[index].musicPosterUrl);
    setmusicartist(songs[index].musicArtist);
  };
  console.log(
    '@@@',
    songs.map((song) => song.musicId).indexOf(songDetails.song.musicId)
  );
  useEffect(() => {
    setmusicurl(songDetails.song.musicUrl);
    setmusicid(songDetails.song.musicId);
    setmusicname(songDetails.song.musicName);
    setmusicposter(songDetails.song.musicPosterUrl);
    setmusicartist(songDetails.song.musicArtist);
  }, [
    songDetails.song.musicid,
    songDetails.song.musicUrl,
    songDetails.song.musicName,
    songDetails.song.musicPosterUrl,
    songDetails.song.musicArtist,
  ]);
  return (
    <footer>
      <div className='custom-ms'>
        <Button
          startIcon={
            <Avatar variant='square' src={musicposter} alt={musicname} />
          }
          className='footer-poster'
        >
          <div className='footer-music-ds text-maxline'>
            <p>{musicname}</p>
          </div>
        </Button>
        <AudioPlayer
          autoPlay
          onPlay={(e) => console.log(musicurl)}
          src={musicurl}
          showSkipControls={true}
          showJumpControls={false}
          onClickNext={nextClicked}
          onClickPrevious={prevClicked}
          className='msp-pd'
        />
      </div>
    </footer>
  );
};

export default FooterMusicPlayer;
