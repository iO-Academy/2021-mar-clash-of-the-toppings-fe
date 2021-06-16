import React, { useState, useEffect } from "react";
import ClashTitle from "./ClashTitle";
import ClashBox from "./ClashBox";

const Clash = () => {
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

  return (
    <div>
      <ClashTitle />
      <ClashBox />
    </div>
  );
};

export default Clash;
