import React from "react";
import ResultsTitle from "./ResultsTitle/";
import PlayButton from "../Splash/PlayButton";

class Results extends React.Component {
    render() {
        return (
            <div>
                <ResultsTitle />
                {/*<ResultsTable />*/}
                <PlayButton />
            </div>

        )
    }
}

export default Results