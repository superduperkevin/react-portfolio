import React from "react";

import "../style/project.css";

class Project extends React.Component {
    render() {
        return(
            <div className="card">
                <div className="card-image">
                    <img src="../images/aura2.png" alt="aura"></img>
                </div>
                <div className="card-details">
                    <div className="name">{this.props.title}</div>
                    <div className="description">{this.props.description}</div>
                    {/* <div className="description">{this.props.description}</div> */}

                </div>
                
            </div>
        )
    }
}

export default Project