import React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { Link, hashHistory } from "react-router";
import query from "../queries/fetchSongs";

class SongList extends React.Component {
  handleDelete(e, id) {
    e.preventDefault();
    e.stopPropagation();
    this.props.mutate({
      variables: {
        id,
      }
    }).then(() => this.props.data.refetch());
  }
  handleNavigate(id) {
    hashHistory.push('song/' + id);
  }
  renderSongs() {
    
    return this.props.data.songs.map((song) => {
      return (
        <li key={song.id} className="collection-item" onClick={this.handleNavigate.bind(this, song.id)}>
          {song.title}
          <i
            className="material-icons right"
            onClick={(e) => this.handleDelete.call(this, e, song.id)}
          >
            delete
          </i>
        </li>
      );
    });
  }
  render() {
    
    if (this.props.data.loading) {
      return <div>Loading....</div>;
    }
    return (
      <div>
        <ul className="collection">{this.renderSongs()}</ul>
        <Link to="song/new" className="btn-floating btn-large red right">
          <i className="material-icons">add</i>
        </Link>
      </div>
    );
  }
}

const mutation = gql`
  mutation DeleteSong($id: ID) {
    deleteSong(id: $id) {
      title
    }
  }
`;

export default graphql(mutation)(graphql(query)(SongList));
