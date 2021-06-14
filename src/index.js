import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {Route, Link, BrowserRouter as Router} from 'react-router-dom';
import App from './Components/Splash'

class Routing extends React.Component {
    render() {
        return (
            <Router>
                <Route path="/" component={App} />
                {/*<Route path="/clash" component={Clash} />*/}
                {/*<Route path="/results" component={Results} />*/}
            </Router>
        )
    }
}

ReactDOM.render(
    <React.StrictMode>
        <Routing />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
