import React from "react";
import "./ToppingTwoCard.css";

const ToppingTwoCard = (props) => {
  return (
    <div id="ToppingTwoOuterBox" onClick={props.handleToppingTwoClick}>
      <div className='gridCell'>
          <p className='dynamicText'>{props.toppingTwo.name}</p>
      </div>
      <div id="centralCard">
        <img
          className="cardImg"
          alt={props.toppingTwo.name}
          src={props.toppingTwo.img}
        />
      </div>
        <div className='gridCell'>
          <p className='genericText'>Category:</p>
          <p className='dynamicText'>{props.toppingTwo.category}</p>
        </div>
          {
              props.cardClicked ?
                  <p className='percentageWin'>
                      Wins: {props.toppingTwo.winPercent}%
                  </p> :
                  ''
          }
    </div>
  );
};

export default ToppingTwoCard;
