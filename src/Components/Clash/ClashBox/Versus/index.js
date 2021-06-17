import React, {useState} from "react";
import './Versus.css'
import VersusIcon from '../../../../Images/vsIcon.png'
import {Redirect} from 'react-router-dom'

const Versus = (props) => {
    const [showResults, setShowResults] = useState(false)

    const goToResults = () => {
        setShowResults(true)
    }

    return (
        <div id='versusBox'>
            <p>{props.gameCounter + 1}/10</p>
            <img id='versusIcon' alt="versus" src={VersusIcon}/>
            {props.cardClicked && props.gameCounter < 9 ?
                <button id='nextRoundButton' onClick={props.nextRound}> Next round </button> :
            props.cardClicked && props.gameCounter >= 9 ?
                <button onClick={goToResults}> Results </button> :
                ''}

            {showResults ? <Redirect to='/results'/> : ''}
        </div>
    )
    }
export default Versus



