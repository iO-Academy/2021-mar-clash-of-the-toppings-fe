import React from "react";
import SpicyBeef from '../../../../../Images/spicyBeef.png'
import './ToppingOneImg.css'

class BeefImg extends React.Component {
    render() {
        return (
            <div id='centralCard'>
                <img alt="Spicy Beef" src={SpicyBeef}/>
            </div>
        )
    }
}

export default BeefImg