import React, { Component } from "react";
import song from "../../Audio/happynes.mp3";
import soundIcon from "../../Audio/musicicon.png";
import "./song.css";

class Song extends Component {
  state = {
    audio: new Audio(song),
    isPlaying: true,
  };

  componentDidMount() {
    this.playPause();
  }

  componentWillUnmount() {
    this.state.audio.pause();
  }

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
        <img id="song" src={soundIcon} onClick={this.playPause} />
      </div>
    );
  }
}

export default Song;
