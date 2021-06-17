import React from "react";
import './ResultTableEntry.css'

const ResultTableEntry = (props) => {
    return (
        <div className={"rowEntry"}>
            <strong>{props.resultTableEntryIndex + 1}</strong>
            <img src={props.resultTableEntryTopping.img} alt={props.resultTableEntryTopping.name}/>
            <div className='toppingName'>{props.resultTableEntryTopping.name}</div>
            <div className='winPercentile'>{props.resultTableEntryTopping.winPercent}%</div>
        </div>
    )
}

export default ResultTableEntry