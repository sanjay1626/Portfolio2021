import React, { Component } from 'react';
import profilepic from "../img/Bio.jpg"
class About extends Component {
    render() {
        return (
            <section id="about">
                <div className="row">
                    <div className="three columns">
                        <img className="profile-pic" src={profilepic} alt="Sanjay Gonsalves"></img>
                    </div>
                    <div className ="nine cloumns main-col">
                        <h2>About Me</h2>
                        <p>Recently completed my intensive Web Development Coding Certificate at the University of California San Diego Extension. Having an appetite for continuous learning, collaboration, and problem-solving. Extending in continuing experience in the foundations of web development while honing my skills in HTML5, CCS, Bootstrap, and JavaScript, jQuery, React, Node.js, Axios, Express, Handlebars,  and a bit of Mongodb & MySQL. Equally passionate about building applications with each project is to best engage the audience for an impactful user-experience and excited to leverage my skills with a company to grow and become a valuable asset.
</p>

                    </div>

                </div>

            </section>
            )
    }
    
}
export default About