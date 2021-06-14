import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

class NewExample extends React.Component {
    constructor(props) {
        super(props)
    }
    handleClick = () => {
        document.querySelector('#my-image').src = 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-puppy.jpeg'
    }
    render() {
        return (
            <div>
                <img id="my-image" onClick={ this.handleClick } src="https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-kitty.jpg" />
            </div>
        )
    }
}

ReactDOM.render(
    <React.StrictMode>
        <NewExample />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
