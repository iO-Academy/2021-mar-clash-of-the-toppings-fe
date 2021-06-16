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
  }, []);

  const handleToppingOneClick = () => {
    if (cardClicked === false) {
      toppingOne.wins++;
      toppingOne.battles++;
      toppingTwo.battles++;

      updateTopping(toppingOne, setToppingOne);
      updateTopping(toppingTwo, setToppingTwo);
      setCardClicked(true);
    }
  };

  const handleToppingTwoClick = () => {
    if (cardClicked === false) {
      toppingTwo.wins++;
      toppingTwo.battles++;
      toppingOne.battles++;

      updateTopping(toppingOne, setToppingOne);
      updateTopping(toppingTwo, setToppingTwo);
      setCardClicked(true);
    }
  };

  return (
    <div>
      <ClashTitle />
      <ClashBox
        handleToppingOneClick={handleToppingOneClick}
        toppingOne={toppingOne}
        handleToppingTwoClick={handleToppingTwoClick}
        toppingTwo={toppingTwo}
        cardClicked={cardClicked}
      />
    </div>
  );
};

export default Clash;
