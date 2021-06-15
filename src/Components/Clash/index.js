import React, {useState, useEffect} from 'react'
import ClashTitle from "./ClashTitle";
import ClashBox from "./ClashBox";

const Clash = ()> {
    const [allToppings, setAllToppings] = useState([]);
    const [toppingOne, setToppingOne] = useState({});
    const [toppingTwo, setToppingTwo] = useState({});

    useEffect( () => {
        fetch('http://localhost:5000/toppings').then(res=>res.json()).then(data =>console.log(data.data));
    }, []);

    // const getToppings = async(url) => {
    //        const res = await fetch(url);
    //        const data = await res.json();
    //        console.log(data);
    //        return data;
    //     }

    return (
        <div>
            <ClashTitle />
            <ClashBox />
        </div>
    )
}

export default Clash;