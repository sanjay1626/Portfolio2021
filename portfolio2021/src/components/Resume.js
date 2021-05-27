import React, { Component } from 'react';
import ProgressBar from "@ramonak/react-progress-bar";

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
                        <h3>
                            <span>FC Associate 2020 - present</span><br />
                            <span>Amazon Prime LLC</span> <br />
                            <br />
                            <span>EC Supervisor</span><br />
                            <span>BlackArrow Express 2016 - 2019</span> <br />
                            <br />
                            <span>Data Entry/ Area Supervisor</span><br />
                            <span>Filmetrucs Inc. 2011 - 2011</span><br />
                            <br />
                            <span>Customer Service Representative</span><br />
                            <span>People Support 2008 - 2010</span><br />
                            <br />
                            <span>Technical Support Representative</span><br />
                            <span>Sykes Asia Inc. 2005 - 2006</span><br />
                            <br />

                        </h3>
                </div>
                <div className ="row">
                    <h1><span>Skills</span></h1>
                <h3>
                    <span>HTML</span><br />
                    <br />
                    <ProgressBar completed = {85} width ={500}/><br />
                    <br />

                    <span>CSS</span><br />
                    <br />
                    <ProgressBar completed = {85} width ={500} bgColor= '#6e7881' /><br />
                    <br />
                  
                </h3>
                </div>
                 
             </div>
               
            </section>
        )
    }
}

export default Resume;