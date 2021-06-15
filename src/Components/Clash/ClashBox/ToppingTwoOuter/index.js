import React from "react";
import ToppingTwoName from "./ToppingTwoName";
import ToppingTwoCat from "./ToppingTwoCat";
import BeefImg from "../ToppingOneOuter/ToppingOneImg";
import './ToppingTwoOuter.css'

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