import React from "react";
import "./ToppingOneCard.css";

const ToppingOneCard = (props) => {
  return (
    <div id="ToppingOneOuterBox" onClick={props.handleToppingOneClick}>
      <div>
        <p>Name: {props.toppingOne.name}</p>
      </div>
      <div id="centralCard">
        <img
          className="cardImg"
          alt={props.toppingOne.name}
          src={props.toppingOne.img}
        />
      </div>
      <div>
        <p>Category: {props.toppingOne.category}</p>
      </div>
    </div>
  );
};

export default ToppingOneCard;
