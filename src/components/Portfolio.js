import React from "react";

// import Project from "./Project";

import "../style/portfolio.css";

// import auraImage from "../images/aura.png";
import auraLogo from "../images/auraLogo.png";
import sliceitImage from "../images/sliceit.png";
import sliceitLogo from '../images/slice-it-logo.svg';

class Portfolio extends React.Component {
    render() {
        return(
            <div className="projects-page">
                <div className="projects-header">
                    <h1>Projects</h1>
                </div>
                <div className="projects">
                       {/* <div className="aura-container">
                            <div className="project-image">
                                <img src={auraImage} alt="aura"></img>
                            </div>
                            <div className="details">
                                <div className="details-header">
                                    <a href="https://www.github.com/project-aura" rel="noopener noreferrer" target="_blank">
                                        <i className="fab fa-github-square"></i>  
                                    </a>
                                    <div className="aura-logo">
                                        <img src={auraLogo} alt="aura-logo"></img>
                                    </div>                                    
                                    <a href="https://aura.community" rel="noopener noreferrer" target="_blank">
                                        <i className="fas fa-eye" id="live"></i>
                                    </a>
                                </div>
                                <p>Aura is a full-stack web application that allows users to pick destinations based on desired mood, activity and location(currently only locations in Los Angeles).</p>
                                <p>Built With: <b>MongoDB</b> | <b>Express.js</b> | <b>React</b> | <b>Node.js</b></p>
                            </div>
                       </div> */}
                       <div className="slice-it-container">
                            <div className="project-image">
                                <img src={sliceitImage} alt="slice-it"></img>
                            </div>
                            <div className="details">
                                <div className="details-header">
                                    <a href="https://www.github.com/slice-it" rel="noopener noreferrer" target="_blank">
                                    <i className="fab fa-github-square"></i>  
                                    </a>
                                    <div className="slice-it-logo">
                                    <img src={sliceitLogo} alt="slice-it-logo"></img>
                                    </div>
                                    <a href="https://www.sliceit.pizza" rel="noopener noreferrer" target="_blank">
                                        <i className="fas fa-eye" id="live"></i>
                                    </a>
                                </div>
                                <p>Slice It is a full-stack web application that allows NFL fans to comment and bet on current NFL games to learn more about football and immerse in the community.</p>
                                <p>Built With: <b>MongoDB</b> | <b>Express.js</b> | <b>React</b> | <b>Node.js</b></p>
                            </div>
                       </div>
                       <div className="aura-container">
                                <div className="details">
                                    <div className="details-header">
                                        <a href="https://www.github.com/project-aura" rel="noopener noreferrer" target="_blank">
                                            <i className="fab fa-github-square"></i>  
                                        </a>
                                        <div className="aura-logo">
                                            <img src={auraLogo} alt="aura-logo"></img>
                                        </div>                                    
                                        <a href="https://aura.community" rel="noopener noreferrer" target="_blank">
                                            <i className="fas fa-eye" id="live"></i>
                                        </a>
                                    </div>
                                    <p>Aura is a full-stack web application that allows users to pick destinations based on desired mood, activity and location(currently only locations in Los Angeles).</p>
                                    <p>Built With: <b>MongoDB</b> | <b>Express.js</b> | <b>React</b> | <b>Node.js</b></p>
                            </div>                            
                       </div>
                </div>
            </div>
        )
    }
}

export default Portfolio