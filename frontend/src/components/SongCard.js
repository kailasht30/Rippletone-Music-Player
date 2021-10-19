import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { listSongDetails } from '../actions/SongActions';

var songurl = '';
const SongCard = ({ song }) => {
  const dispatch = useDispatch();

  const songList = useSelector((state) => state.songList);
  const { loading, error, songs } = songList;
  return (
    <Card className='my-3 rounded cs-card'>
      <Link to={`/music/${song.musicId}`}>
        <Card.Img
          src={song.musicPosterUrl}
          variant='top'
          className='d-block mx-auto image-res rounded'
        />
      </Link>
      <Card.Body>
        <Link to={`/music/${song.musicId}`}>
          <Card.Title as='div' className='text-maxline'>
            <strong className='custom-link'>{song.musicName}</strong>
          </Card.Title>
        </Link>
        <Card.Title as='div' className='text-maxline'>
          <strong className='artist'>Artist: {song.musicArtist}</strong>
        </Card.Title>
        <div className='right'>
          <Button
            onClick={(event) =>
              event.stopPropagation(dispatch(listSongDetails(song.musicId)))
            }
            className='cs-btn'
          >
            <i class='fas fa-play'></i>
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export { SongCard };
