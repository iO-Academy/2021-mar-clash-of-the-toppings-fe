import React from "react";
import Versus from "./Versus";
import ToppingOneCard from "./ToppingOneCard";
import ToppingTwoCard from "./ToppingTwoCard";
import "./ClashBox.css";

const ClashBox = (props) => {
  return (
    <div id="ClashBoxStyle">
      <ToppingOneCard
        handleToppingOneClick={props.handleToppingOneClick}
        toppingOne={props.toppingOne}
        cardClicked={props.cardClicked}
      />
        <Versus
            cardClicked={props.cardClicked}
            nextRound={props.nextRound}
            gameCounter={props.gameCounter}
        />
      <ToppingTwoCard
          handleToppingTwoClick={props.handleToppingTwoClick}
          toppingTwo={props.toppingTwo}
          cardClicked={props.cardClicked}
      />
    </div>
  );
};

export default ClashBox;
