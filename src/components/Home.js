import React from 'react';

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
                    <button>View My Work</button>
                </div>
            </div>
        )
    }
}


export default Home;