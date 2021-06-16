import React from "react";
import SpicyBeef from '../../../Images/spicyBeef.png'
import './ResultTableEntry.css'

const ResultTableEntry = (props) => {
    return (
        <div className={"rowEntry"}>
            <strong>{props.resultTableEntryIndex + 1}</strong>
            <img src={SpicyBeef} alt='spicy'/>
            <div className='toppingName'>{props.resultTableEntryTopping.name}</div>
            <div className='winPercentile'>{props.resultTableEntryTopping.winPercent}</div>
        </div>
    )
}

export default ResultTableEntry