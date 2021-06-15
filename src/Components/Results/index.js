import React, {useState, useEffect} from "react";
import ResultsTitle from "./ResultsTitle/";
import PlayButton from "../Splash/PlayButton";

const Results = () => {
    const [topTenToppings, setTopTenToppings] = useState([]);

    useEffect( () => {
        const getTopTenToppings = async () => {
            let res = await fetch("http://localhost:5000/toppings/topten");
            res = await res.json();
            await setTopTenToppings(res.data);
        }
        getTopTenToppings()
    }, [])


    return (
        <div>
            <ResultsTitle />
            {console.log(topTenToppings)}
            <ul>
                {topTenToppings.map((value, index) => {
                    return <li key={index}>{value.name}</li>
                })}
            </ul>

            {/*<ResultsTable />*/}
            <PlayButton />
        </div>
    )

}

export default Results