import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import reportWebVitals from './reportWebVitals'
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import Splash from './Components/Splash'
import Clash from './Components/Clash'
import Results from "./Components/Results";
import NotFound from "./Components/NotFound";

class Routing extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Splash} />
                    <Route path="/clash" component={Clash} />
                    <Route path="/results" component={Results} />
                    <Route component={NotFound} />
                </Switch>
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
