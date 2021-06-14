import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Greeting from './Components/Splash/Greeting/index'
import WelcomeText from "./Components/Splash/WelcomeText";
import PlayButton from "./Components/Splash/PlayButton"

ReactDOM.render(
    <React.StrictMode>
        <Greeting />
        <WelcomeText />
        <PlayButton />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
