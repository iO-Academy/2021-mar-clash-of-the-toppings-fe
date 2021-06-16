import React, { useState, useEffect } from "react";
import ClashTitle from "./ClashTitle";
import ClashBox from "./ClashBox";
import { isCompositeComponent } from "react-dom/cjs/react-dom-test-utils.production.min";

const Clash = (props) => {
  const [toppingOne, setToppingOne] = useState({});
  const [toppingTwo, setToppingTwo] = useState({});
  const [gameCounter, setGameCounter] = useState(0);

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
    toppingOne.wins++;
    toppingOne.battles++;
    toppingTwo.battles++;

    fetch("http://localhost:5000/toppings", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: toppingOne._id,
        wins: toppingOne.wins,
        battles: toppingOne.battles,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setToppingOne(data.data);
      });

    fetch("http://localhost:5000/toppings", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: toppingTwo._id,
        wins: toppingTwo.wins,
        battles: toppingTwo.battles,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setToppingTwo(data.data);
      });
  };

  return (
    <div>
      <ClashTitle />
      <ClashBox
        handleToppingOneClick={handleToppingOneClick}
        toppingOne={toppingOne}
        toppingTwo={toppingTwo}
      />
    </div>
  );
};

export default Clash;
