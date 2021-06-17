import React, {useState} from "react";
import './Versus.css'
import VersusIcon from '../../../../Images/vsIcon.png'
import {Link} from 'react-router-dom'

const Versus = (props) => {
    return (
        <div id='versusBox'>
            <p id='turnCounter'>{props.gameCounter + 1}/10</p>
            <img id='versusIcon' alt="versus" src={VersusIcon}/>
            {props.cardClicked && props.gameCounter < 9 ?
                <button onClick={props.nextRound}> Next round </button> :
            props.cardClicked && props.gameCounter >= 9 ?
                <Link to="/results"><button> Results </button></Link> :
                ''}
        </div>
    )
}
export default Versus



