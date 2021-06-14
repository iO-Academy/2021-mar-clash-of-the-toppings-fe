import React from "react";
import './PlayButton.css';
import { useHistory } from 'react-router-dom';

const PlayButton = () => {
    const history = useHistory();
    const handleClick = () => history.push('/clash');

    return (
        <div>
            <button onClick={ handleClick }>
                PLAY GAME
            </button>
        </div>
    );
};

export default PlayButton