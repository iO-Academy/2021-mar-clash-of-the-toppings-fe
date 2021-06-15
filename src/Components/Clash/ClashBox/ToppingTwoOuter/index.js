import React from "react";
import ToppingTwoName from "./ToppingTwoName";
import ToppingTwoCat from "./ToppingTwoCat";
import BeefImg from "../ToppingOneOuter/ToppingOneImg";

class ToppingTwoCard extends React.Component {
    render() {
        return (
            <div>
                <ToppingTwoName />
                <BeefImg />
                <ToppingTwoCat />
            </div>
        )
    }
}

export default ToppingTwoCard