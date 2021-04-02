import React from "react";

class LyricList extends React.Component {
  renderLyrics() {
    console.log(this.props)
    return this.props.lyrics.map((lyric) => {
      return (
        <li key={lyric.id} className="collection-item">
          {lyric.content}
        </li>
      );
    });
  }
  render() {
    return (
      <div>
        <ul className="collection">{this.renderLyrics()}</ul>
      </div>
    );
  }
}

export default LyricList;
