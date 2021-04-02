import React, { Component } from "react";
import {graphql} from 'react-apollo';
import AddLyricMutation from '../mutations/addLyric';

class LyricCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const {songId} = this.props;
    const content = this.state.content;
    this.props.mutate({
      variables: {
        songId,
        content
      },
      // refetchQueries: [{
      //   query: fetchLyricsQuery(songId)
      // }]
    }).then(() => {
      this.setState({content: ""})
    })
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <lable>Add a Lyric</lable>
        <input
          value={this.state.content}
          onChange={(event) => this.setState({ content: event.target.value })}
        />
      </form>
    );
  }
}

export default graphql(AddLyricMutation)(LyricCreate);
