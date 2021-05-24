import React, { Component } from 'react';
import biopic from "../img/Bio.jpg"
import resumeDownload from "../img/resumeDownload.pdf"
class About extends Component {
    render() {
        return (
            <section id="about">
                <div className="row ">
                    <div className="three columns ">
                        <img className="biopic" id="biopic" src={biopic} alt="Sanjay Gonsalves"></img>
    
                        <div className ="nine cloumns main-col">
                            <h2>About Me</h2>
                            <p>Recently completed my intensive Web Development Coding Certificate at the University of California San Diego Extension. Having an appetite for continuous learning, collaboration, and problem-solving. Extending in continuing experience in the foundations of web development while honing my skills in HTML5, CCS, Bootstrap, and JavaScript, jQuery, React, Node.js, Axios, Express, Handlebars,  and a bit of Mongodb & MySQL. Equally passionate about building applications with each project is to best engage the audience for an impactful user-experience and excited to leverage my skills with a company to grow and become a valuable asset.
                            </p>
                            <div className="row">
                                <div className ="columns contact-details">
                                    <h2>Contact Details</h2>
                                    <p className="address">
                                         <span>Sanjay Gonsalves</span><br />
                                         <span>1302 Leaf Terrace<br />
                                               San Diego CA, 92114</span><br />
                                         <span>(619)636-2857</span><br />
                                         <span>snjgonsalves@gmail.com</span>
                                    </p>
                                </div>
                                <div className="columns download">
                                    <p>
                                    <a href={resumeDownload} className="button"><i className="fa fa-download"></i>Download Resume</a>
                                    </p>

                                </div>
                            </div>
                        </div>                  
                    </div>
                </div>

            </section>
            )
    }
    
}
export default About