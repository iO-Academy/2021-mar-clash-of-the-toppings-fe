import React from "react";
import ToppingTwoName from "./ToppingTwoName";
import ToppingTwoCat from "./ToppingTwoCat";
import BeefImg from "../ToppingOneCard/ToppingOneImg";
import './ToppingTwoCard.css'

class ToppingTwoCard extends React.Component {
    render() {
        return (
            <div id="ToppingTwoOuterBox">
                <ToppingTwoName />
                <BeefImg />
                <ToppingTwoCat />
            </div>
        )
    }
}

export default ToppingTwoCard
