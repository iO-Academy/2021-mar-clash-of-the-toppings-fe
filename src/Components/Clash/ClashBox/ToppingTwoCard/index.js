import React from "react";
import ToppingTwoName from "./ToppingTwoName";
import ToppingTwoCat from "./ToppingTwoCat";
import BeefImg from "../ToppingOneCard/ToppingOneImg";
import "./ToppingTwoCard.css";

const ToppingTwoCard = (props) => {
  return (
    <div id="ToppingTwoOuterBox">
      <div>
        <p>Name: {props.toppingTwo.name}</p>
      </div>
      <div id="centralCard">
        <img
          className="cardImg"
          alt={props.toppingTwo.name}
          src={props.toppingTwo.img}
        />
      </div>
      <div>
        <p>Category: {props.toppingTwo.category}</p>
      </div>
    </div>
  );
};

export default ToppingTwoCard;
