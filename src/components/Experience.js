import React from "react";

import "../style/experience.css";

class Experience extends React.Component {
    render() {
        return(
            <div className="experience">
                <div className="section-heading">
                    <h1>Experience</h1>
                    <a href='../Kevin.A_Resume.pdf' download>Click to download full resume</a>
                </div>
                <div className="timeline">
                    <ul>
                        <li className="date" data-date="01/2019 - 11/2019">
                            <h1>Full Stack Engineer</h1>
                            <h2><a className="talentpath" href="https://talentpath.com" target="_blank" rel="noopener noreferrer">Talent Path</a> | Culver City, CA</h2>
                            <p>- Create websites and applications with standard HTML/CSS practices.<br/>
                                - Create and maintain software documentation.<br/>
                                - Write well designed, testable, efficient code by using best software development practices.<br/>
                                - Managed projects via <i>Github</i> by leveraging Kanban boards, source control, and issue tracking.<br/></p>
                        </li>
                        <li className="date" data-date="09/2018 - Current">
                            <h1>Freelance Web Developer</h1>
                            <h2>Independent Contracts</h2>
                            <p>- Collaborated with an agile team to successfully develop an app from conception to production.<br/>
                                - Built full-stack applications with <i>React</i>, <i>Node.js</i>, <i>Express</i>, and <i>MongoDB</i>.<br/>
                                - Implemented advanced CSS including grid, flexbox, and responsive design.<br/>
                                - Performed web service testing with <i>Postman</i> & unit and end-to-end testing with <i>Jest</i>.<br/>
                                - Managed projects via <i>Github</i> by leveraging Kanban boards, source control, and issue tracking.</p>
                        </li>
                        <li className="date" data-date="01/2018 - 06/2018">
                            <h1>Web and UX Designer</h1>
                            <h2><a className="mtf" href="https://mtfinternational.org" target="_blank" rel="noopener noreferrer">Medical Task Force International</a> | Redlands, CA</h2>
                            <p>- Met with stakeholders to discuss requirements and/or project progress.<br/>
                                - Conducted user research and testing.<br/>
                                - Developed lo-fi & hi-fi wireframes and user flows based on user needs.<br/>
                                - Created intuitive and clean web designs using <i>Adobe CS</i>.<br/>
                                - Record and evaluate user interactions with Google Analytics and overall product success.
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Experience