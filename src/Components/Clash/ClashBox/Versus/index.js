import React, {useState} from "react";
import './Versus.css'
import VersusIcon from '../../../../Images/vsIcon.png'
import {Link} from 'react-router-dom'

const Versus = (props) => {
    return (
        <div id='versusBox'>
            <img id='versusIcon' alt="versus" src={VersusIcon}/>
            {props.cardClicked && props.gameCounter < 10 ?
                <button onClick={props.nextRound}> Next round </button> :
            props.cardClicked && props.gameCounter >= 10 ?
                <Link to="/results"><button> Results </button></Link> :
                ''}
        </div>
    )
}
export default Versus



