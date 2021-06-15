import React from "react";
import SpicyBeef from '../../../Images/spicyBeef.png'
import './ResultTableEntry.css'

const ResultTableEntry = (props) => {
    return (
        <div className={"idkwhatagoodnameis"}>
            <strong>{props.resultTableEntryIndex + 1}</strong>
            {console.log(props.resultTableEntryTopping)}
            <img src={SpicyBeef} />
            {props.resultTableEntryTopping.name}
            {props.resultTableEntryTopping.winPercent}
        </div>
    )
}

export default ResultTableEntry