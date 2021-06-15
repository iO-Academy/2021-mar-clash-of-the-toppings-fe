import React from "react";
import Versus from "./Versus";
import ToppingOneCard from "./ToppingOneOuter";
import ToppingTwoCard from "./ToppingTwoOuter";

class ClashBox extends React.Component {
    render() {
        return (
            <div>
                <ToppingOneCard />
                <Versus />
                <ToppingTwoCard />
            </div>
        )
    }
}

export default ClashBox
