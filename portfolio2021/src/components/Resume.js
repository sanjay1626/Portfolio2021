import React, { Component } from 'react';


class Resume extends Component{
    render(){
        return (
            <section>
             <div className =" flex-container" id="resume">
                <div className ="row">
                    <h3>Education</h3>
                    <hr />
                </div>
                <div className ="row">
                        <h3>Work</h3>
                </div>
                <div className ="row">
                    <h3>Skills</h3>
             </div>
             </div>
               
            </section>
        )
    }
}

export default Resume;