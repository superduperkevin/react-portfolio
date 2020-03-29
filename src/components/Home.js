import React from 'react';
import { Link } from "react-router-dom";

import '../style/home.css';

class Home extends React.Component {
    render() {
        return (
            <div className="landing-text-container">
                <div className="landing-text">
                    <h1>Hi, I'm<span> Kevin.</span></h1>
                    <div className="expertises">
                    <h6>User Experience Design</h6>
                    <h6>|</h6>
                    <h6>Web Development</h6>
                    <h6>|</h6>
                    <h6>Product Management</h6>
                    </div>
                    {/* <button onClick=''>View My Work</button> */}
                    <Link to="/portfolio" className="view-work">View My Work</Link>

                </div>
            </div>
        )
    }
}


export default Home;