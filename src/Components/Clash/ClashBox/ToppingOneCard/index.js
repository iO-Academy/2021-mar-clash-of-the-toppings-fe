import React from "react";
import "./ToppingOneCard.css";

const ToppingOneCard = (props) => {
  return (
    <div id="ToppingOneOuterBox" onClick={props.handleToppingOneClick}>
      <div>
          <p className='genericText'>Name:</p>
          <p className='dynamicText'>{props.toppingOne.name}</p>
      </div>
      <div id="centralCard">
        <img
          className="cardImg"
          alt={props.toppingOne.name}
          src={props.toppingOne.img}
        />
      </div>
      <div>
          <p className='genericText'>Category:</p>
          <p className='dynamicText'>{props.toppingOne.category}</p>
          <p className='percentageWin'>{props.toppingOne.winPercent}%</p>
      </div>
    </div>
  );
};

export default ToppingOneCard;
