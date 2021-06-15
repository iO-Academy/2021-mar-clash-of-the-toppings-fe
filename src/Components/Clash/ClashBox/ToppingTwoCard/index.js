import React from "react";
import ToppingTwoName from "./ToppingTwoName";
import ToppingTwoCat from "./ToppingTwoCat";
import BeefImg from "../ToppingOneCard/ToppingOneImg";
import './ToppingTwoCard.css'

const ToppingTwoCard = () => {
        return (
            <div id="ToppingTwoOuterBox">
                <ToppingTwoName />
                <BeefImg />
                <ToppingTwoCat />
            </div>
        )
}

export default ToppingTwoCard
