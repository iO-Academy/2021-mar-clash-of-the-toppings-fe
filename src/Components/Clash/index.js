import React, { useState, useEffect } from "react";
import ClashTitle from "./ClashTitle";
import ClashBox from "./ClashBox";
import updateTopping from "../../utils";

const Clash = (props) => {
  const [toppingOne, setToppingOne] = useState({});
  const [toppingTwo, setToppingTwo] = useState({});
  const [gameCounter, setGameCounter] = useState(0);
  const [cardClicked, setCardClicked] = useState(false);

  useEffect(() => {
    const getData = async () => {
      let res = await fetch("http://localhost:5000/toppings");
      res = await res.json();
      setToppingOne(res.data[0]);
      setToppingTwo(res.data[1]);
    };
    getData();
  }, [gameCounter]);

  const handleToppingOneClick = (e) => {
    if (cardClicked === false && (e.key === "Enter" || e.button === 0)) {
      toppingOne.wins++;
      toppingOne.battles++;
      toppingTwo.battles++;

      updateTopping(toppingOne, setToppingOne);
      updateTopping(toppingTwo, setToppingTwo);
      setCardClicked(true);
    }
  };

  const handleToppingTwoClick = (e) => {
    if (cardClicked === false && (e.key === "Enter" || e.button === 0)) {
      toppingTwo.wins++;
      toppingTwo.battles++;
      toppingOne.battles++;

      updateTopping(toppingOne, setToppingOne);
      updateTopping(toppingTwo, setToppingTwo);
      setCardClicked(true);
    }
  };

  const nextRound = () => {
    setGameCounter(gameCounter + 1);
    setCardClicked(false);
  };

  return (
    <div>
      <ClashTitle />
      <ClashBox
        handleToppingOneClick={handleToppingOneClick}
        toppingOne={toppingOne}
        handleToppingTwoClick={handleToppingTwoClick}
        toppingTwo={toppingTwo}
        gameCounter={gameCounter}
        cardClicked={cardClicked}
        nextRound={nextRound}
      />
    </div>
  );
};

export default Clash;
