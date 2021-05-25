import React, { Component } from 'react';


class Resume extends Component{
    render(){
        return (
            <section>
             <div className ="row" id="resume">
                
                    
                    <h1>
                        <span>Education</span></h1>
                   
                        <h3>
                    <span>UCSD Extension</span><br />
                        <span>Web Development BootCamp</span><br />
                        <span> March 2021</span><br /><br />


                        <span>University of Baguio</span><br />
                        <span>BS Computer Engineering</span><br />
                        <span>May 2004</span><br /><br />
                    </h3>

                 

                
                <div className ="row work" >
                        <h1><span>Work</span></h1>

                </div>
                <div className ="row">
                    <h1>Skills</h1>
             </div>
             </div>
               
            </section>
        )
    }
}

export default Resume;