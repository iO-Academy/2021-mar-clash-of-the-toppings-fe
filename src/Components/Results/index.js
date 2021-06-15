import React, {useState, useEffect} from "react";
import ResultsTitle from "./ResultsTitle/";
import PlayButton from "../Splash/PlayButton";
import ResultTableEntry from "./ResultTableEntry";

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
            <div>
                {topTenToppings.map((value, index) => {
                    return <ResultTableEntry key={index} resultTableEntryIndex={index} resultTableEntryTopping={value} />
                })}
            </div>
            {/*<ResultsTable />*/}
            <PlayButton />
        </div>
    )

}

export default Results