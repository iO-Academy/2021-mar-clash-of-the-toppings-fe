import React, { Component } from "react";
import song from "../../Audio/happynes.mp3";

class Song extends Component {
  state = {
    audio: new Audio(song),
    isPlaying: false,
  };

  playPause = () => {
    let isPlaying = this.state.isPlaying;
    if (isPlaying) {
      this.state.audio.pause();
    } else {
      this.state.audio.play();
      this.state.audio.volume = 0.1;
    }

    this.setState({ isPlaying: !isPlaying });
  };

  render() {
    return (
      <div>
        <button onClick={this.playPause}>Play | Pause</button>
      </div>
    );
  }
}

export default Song;
