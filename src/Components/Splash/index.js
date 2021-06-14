import React from "react";
import Greeting from "./Greeting/index";
import WelcomeText from "./WelcomeText/index";
import PlayButton from "./PlayButton/index";

class App extends React.Component {
    render() {
        return (
            <div>
                <Greeting />
                <WelcomeText />
                <PlayButton />
            </div>

        )
    }
}

export default App