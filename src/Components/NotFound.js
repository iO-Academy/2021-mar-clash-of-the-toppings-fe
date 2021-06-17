import React from 'react'
import {Link} from 'react-router-dom'

const NotFound = () => {
    return ( <div>
        <h1>404 - Pizza Not found!</h1>
    <p><Link to="/"><button>Go Back Home</button></Link></p></div>)
}
export default NotFound