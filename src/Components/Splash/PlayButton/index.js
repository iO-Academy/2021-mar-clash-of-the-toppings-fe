import React from "react";
import './PlayButton.css';

class PlayButton extends React.Component {
    handleClick = () => {
        console.log(this)
    }
    render() {
        return (
            <div>
                <button onClick={ this.handleClick }>
                    PLAY GAME
                </button>
            </div>
        )
    }
}

export default PlayButton