import React, { useEffect } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { listSongDetails } from '../actions/SongActions';
import FooterMusicPlayer from '../components/FooterMusicPlayer';
import Loader from '../components/Loader';
import Message from '../components/Message';

const MusicPlayer = ({ match }) => {
  const dispatch = useDispatch();

  const songDetails = useSelector((state) => state.songDetails);
  const { loading, error, song } = songDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    dispatch(listSongDetails(match.params.id));
  }, [dispatch, match]);
  return (
    <div className='bg-home'>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <div className='image-handle'>
            <Image
              src={song.musicPosterUrl}
              alt={song.musicName}
              className='custom-image'
            ></Image>
          </div>

          <Col>
            <h2 className='song-title'>{song.musicName}</h2>
            <p className='song-artist'>{song.musicArtist}</p>
          </Col>
        </>
      )}
      <FooterMusicPlayer song={song.musicUrl} />
    </div>
  );
};

export default MusicPlayer;
