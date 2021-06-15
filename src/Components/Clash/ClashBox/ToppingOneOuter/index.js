import React from "react";
import ToppingOneName from "./ToppingOneName";
import ToppingOneCat from "./ToppingOneCat";
import BeefImg from "./ToppingOneImg";

class ToppingOneCard extends React.Component {
    render() {
        return (
            <div>
                <ToppingOneName />
                <BeefImg />
                <ToppingOneCat />
            </div>
        )
    }
}

export default ToppingOneCard