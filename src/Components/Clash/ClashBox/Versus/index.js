import React from "react";
import './Versus.css'
import VersusIcon from '../../../../Images/vsIcon.png'

const Versus = (props) =>
    <div id='versusBox'>
        <img id='versusIcon' alt="versus" src={VersusIcon} />
        {console.log(props.cardClicked)}
        {console.log('yiiii')}
        {props.cardClicked ? <button >Next round</button> : ''}
    </div>

export default Versus



