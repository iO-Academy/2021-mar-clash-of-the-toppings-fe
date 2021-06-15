import React, {useState, useEffect} from 'react'
import ClashTitle from "./ClashTitle";


// function ToppingsDeck() {
//     const getToppings() {
//         fetch('')
//             .then(res => res.json())
//             .then(data =>)
//     }

// }

// function Bitcoin() {
//     const [btc, setBtc] = useState(0)
//     function getBitcoin() {
//         fetch('https://api.coindesk.com/v1/bpi/currentprice/gbp.json')
//             .then(res => res.json())
//             .then(data => {
//                 setBtc(parseFloat(data.bpi.GBP.rate_float).toFixed(2))
//             })
//     }
//     useEffect(() => {
//         setInterval(
//             getBitcoin,
//             1000
//         )
//     }, [])
//     return (
//         <div>
//             <h1>The Bitcoin price is currently {btc}</h1>
//         </div>
//     )
// }

class Clash extends React.Component {
    render() {
        return (
            <div>
                <ClashTitle />
                {/*<ClashBox />*/}
            </div>

        )
    }
}

export default Clash