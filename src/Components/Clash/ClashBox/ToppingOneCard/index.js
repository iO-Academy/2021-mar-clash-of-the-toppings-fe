import React from "react";
import "./ToppingOneCard.css";

const ToppingOneCard = (props) => {
  return (
    <div id="ToppingOneOuterBox" onClick={props.handleToppingOneClick} onKeyDown={props.handleToppingOneClick} tabIndex={0}>
      <div>
          <p className='dynamicText'>{props.toppingOne.name}</p>
      </div>
      <div id="centralCard">
        <img
          className="cardImg"
          alt={props.toppingOne.name}
          src={props.toppingOne.img}
        />
      </div>
        <div className='gridCell'>
          <p className='genericText'>Category:</p>
          <p className='dynamicText'>{props.toppingOne.category}</p>
        </div>
          {
              props.cardClicked ?
              <p className='percentageWin'>
                  Wins: {props.toppingOne.winPercent}%
              </p> :
              ''
          }
    </div>
  );
};

export default ToppingOneCard;
