import React from "react";
import ToppingOneName from "./ToppingOneName";
import ToppingOneCat from "./ToppingOneCat";
import BeefImg from "./ToppingOneImg";
import './ToppingOneOuter.css'

class ToppingOneCard extends React.Component {
    render() {
        return (
            <div id="ToppingOneOuterBox">
                <ToppingOneName />
                <BeefImg />
                <ToppingOneCat />
            </div>
        )
    }
}

export default ToppingOneCard