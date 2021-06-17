import React from "react";
import "./ToppingTwoCard.css";

const ToppingTwoCard = (props) => {
  return (
    <div id="ToppingTwoOuterBox" onClick={props.handleToppingTwoClick}>
      <div>
          <p className='dynamicText'>{props.toppingTwo.name}</p>
      </div>
      <div id="centralCard">
        <img
          className="cardImg"
          alt={props.toppingTwo.name}
          src={props.toppingTwo.img}
        />
      </div>
      <div>
          <p className='genericText'>Category:</p>
          <p className='dynamicText'>{props.toppingTwo.category}</p>
          {
              props.cardClicked ?
                  <p className='percentageWin'>
                      Wins: {props.toppingTwo.winPercent}%
                  </p> :
                  ''
          }
      </div>
    </div>
  );
};

export default ToppingTwoCard;