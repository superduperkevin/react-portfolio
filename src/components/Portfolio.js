import React from "react";

// import Project from "./Project";

import "../style/portfolio.css";

import auraImage from "../images/aura.png";
import sliceitImage from "../images/sliceit.png";

class Portfolio extends React.Component {
    render() {
        return(
            <div className="projects-page">
                <div className="projects-header">
                    <h1>Projects</h1>
                </div>
                <div className="projects">
                       <div className="aura-container">
                            <div className="project-image">
                                <img src={auraImage} alt="aura"></img>
                            </div>
                            <div className="details">
                                <div className="details-header">
                                    <a href="github.com">
                                        <i className="fab fa-facebook-square">jas</i>
                                    </a>
                                    <h2>Aura</h2>
                                    <a href="aura.commmunity">
                                        <i className="fab fa-facebook-square"></i>
                                    </a>
                                </div>
                                <p>Aura is a full-stack web application that allows users to pick destinations based on desired mood, activity and location(currently only locations in Los Angeles).</p>
                                <p>Built With: <b>MongoDB</b> | <b>Express.js</b> | <b>React</b> | <b>Node.js</b></p>
                            </div>
                       </div>
                       <div className="slice-it-container">
                            <div className="project-image">
                                <img src={sliceitImage} alt="slice-it"></img>
                            </div>
                            <div className="details">
                                <h2>Slice it</h2>
                                <p>Slice It is a full stack web application that allows NFL fans to comment and bet on current NFL games to learn more about the sport and join the community.</p>
                                <p>Built With: <b>MongoDB</b> | <b>Express.js</b> | <b>React</b> | <b>Node.js</b></p>

                            </div>
                       </div>
                       <div className="slice-it-container">
                            <div className="project-image">
                                <img src={sliceitImage} alt="slice-it"></img>
                            </div>
                            <div className="details">
                                <h2>Slice it</h2>
                                <p>Slice It is a full stack web application that allows NFL fans to comment and bet on current NFL games to learn more about the sport and join the community.</p>
                                <p>Built With: <b>MongoDB</b> | <b>Express.js</b> | <b>React</b> | <b>Node.js</b></p>
                            </div>
                       </div>
                </div>
            </div>
        )
    }
}

export default Portfolio