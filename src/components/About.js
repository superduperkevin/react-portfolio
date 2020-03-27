import React from "react";

import "../style/about.css";
import "../style/all.css"; //Font-awesome css

import profile from "../images/trump.jpg";

// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import { faGlasses } from '@fortawesome/free-solid-svg-icons';

class About extends React.Component {
    render() {
        return(
            <div className="about-component">
                <div className="top">
                    <div className="top-left">
                        <div className="img-wrapper">
                            <img src={profile} alt="about"></img>
                        </div>
                    </div>
                    <div className="top-right">
                        <div className="about-details">
                            <div className="about-heading">
                                <h1>About Me</h1>
                            </div>
                            <p>My name is Kevin Amarbayar and I'm a Software Engineer based in Los Angeles, CA. 
                            I began my passion in web development when I first began making webpages during highschool. 
                            Since beginning my journey as a freelance designer nearly 8 years ago, 
                            I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. 
                            I'm quietly confident, naturally curious, and perpetually racking my brain on creating the next amazing application.</p>

                            <div className="about-icons">
                            <a href="https://facebook.com/kevin.amarbayar" rel="noopener noreferrer" target="_blank">
                                <i className="fab fa-facebook-square"></i>
                            </a>
                            <a href="https://github.com/superduperkevin" rel="noopener noreferrer" target="_blank">     
                                <i className="fab fa-github-square"></i>  
                            </a>
                            <a href="https://www.linkedin.com/in/kevin-amarbayar/" rel="noopener noreferrer" target="_blank">     
                                <i className="fab fa-linkedin"></i>     
                            </a>
                        </div>
                        </div>
                        
                    </div>
                </div>
                <div className="my-skills">
                    <div className="skill">
                        <h1>
                            Web Design
                        </h1>
                        <p>UX Research <br/> Wireframing & Prototyping<br/> Adobe XD | Figma</p>
                    </div>
                    <div className="skill">
                        <h1>
                            Web Development
                        </h1>
                        <p>HTML | CSS | JavaScript<br/> 
                            React | Angular | Vue <br/>
                            Python | SQL | API
                        </p>
                    </div>
                    <div className="skill">
                        <h1>
                            Product Management
                        </h1>
                        <p> Technical Expertise <br/> 
                            <a className="neophile" href="https://en.wikipedia.org/wiki/Neophile" target="_blank" rel="noopener noreferrer">Neophile</a> <br/>
                            Effective Writing <br/>
                        </p>
                    </div>
                </div>
            </div>

            
                
                
        )
    }
}

export default About