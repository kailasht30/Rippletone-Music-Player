import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

var songurl = '';
const SongCard = ({ song }) => {
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
      </Card.Body>
    </Card>
  );
};

export { SongCard };
