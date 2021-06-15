import React from "react";
import Versus from "./Versus";
import ToppingOneCard from "./ToppingOneCard";
import ToppingTwoCard from "./ToppingTwoCard";
import './ClashBox.css'

const ClashBox = () => {
        return (
            <div id='ClashBoxStyle'>
                <ToppingOneCard />
                <Versus />
                <ToppingTwoCard />
            </div>
        )
}

export default ClashBox
