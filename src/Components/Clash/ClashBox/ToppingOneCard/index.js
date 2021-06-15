import React from "react";
import ToppingOneName from "./ToppingOneName";
import ToppingOneCat from "./ToppingOneCat";
import BeefImg from "./ToppingOneImg";
import './ToppingOneCard.css'

const ToppingOneCard =() => {
        return (
            <div id="ToppingOneOuterBox">
                <ToppingOneName />
                <BeefImg />
                <ToppingOneCat />
            </div>
        )
}

export default ToppingOneCard