import React from 'react';
import fetchSong from '../queries/fetchSong';
import {graphql} from 'react-apollo';
import {Link} from 'react-router';
import LyricCreate from './LyricCreate';
import LyricList from './LyricList';

class SongDetail extends React.Component {
  constructor() {
    super();
    this.state = {
      title: ""
    }
  }
  render() {
    const {song} = this.props.data;
    if (!song) {
      return null
    }
    return (
      <div>
        <Link to="/">Back</Link>
        <h3>{song.title}</h3>
        <h5>Lyrics List</h5>
        <LyricList lyrics={song.lyrics}/>
        <LyricCreate songId={this.props.params.id}/>
      </div>
    )
  }
}

export default graphql(fetchSong, {
  options: (props) => {return {
    variables: {
      id: props.params.id
    }
  }} 
})(SongDetail)