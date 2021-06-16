import React from "react";
import Versus from "./Versus";
import ToppingOneCard from "./ToppingOneCard";
import ToppingTwoCard from "./ToppingTwoCard";
import "./ClashBox.css";

const ClashBox = (props) => {
  return (
    <div id="ClashBoxStyle">
      <ToppingOneCard toppingOne={props.toppingOne} />
      <Versus />
      <ToppingTwoCard toppingTwo={props.toppingTwo} />
    </div>
  );
};

export default ClashBox;
