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
                    <div className="info">
                        <h2>University of California San Diego Extension</h2>
                        <span>Boot Camp Web Developement</span><br />
                        <div className="date">March 2021</div>
                    </div>
                   
                    <div className="info">
                        <h2>University of Baguio</h2>
                        <span>Bachelor's in Science of Computer Engineering</span><br />
                        <div className="date">May 2004</div>
                    </div><br />

                    </h3>

                <div className ="row work" >
                        <h1><span>Work</span></h1>
                        <h3 className="info">
                            <span>Fullfillment Center Associate 2020 - present</span><br />
                            <span>Amazon Prime LLC</span> <br />
                            <br />
                            <span>Express Center Supervisor</span><br />
                            <span>BlackArrow Express 2016 - 2019</span> <br />
                            <br />
                            <span>Data Entry/ Area Supervisor</span><br />
                            <span>Filmetrics Inc. 2011 - 2011</span><br />
                            <br />
                            <span>Customer Service Representative</span><br />
                            <span>People Support 2008 - 2010</span><br />
                            <br />
                            <span>Technical Support Representative</span><br />
                            <span>Sykes Asia Inc. 2005 - 2006</span><br />
                            <br />

                        </h3>
                </div>
                <div className ="row " id ="skill">
                    <h1><span>Skills</span></h1>
                <h3 className="info">
                    <span>HTML5/CSS</span><br />
                    <ProgressBar completed = {85} width ={500}/> <br />
                    <span>JavaScript & JQuery</span><br />
                    <ProgressBar completed = {80} width ={500} bgColor= 'rgb(241, 134, 134)' /><br />
                    <span>Node</span><br />
                    <ProgressBar completed = {75} width ={500} bgColor= '#11abb0'/> <br />
                    <span>Express</span><br />
                    <ProgressBar completed = {73} width ={500} bgColor= 'rgb(127, 161, 138)' /><br />
                    <span>Mongodb & MySQL</span><br />
                    <ProgressBar completed = {72} width ={500} bgColor= '#f06000' /><br />
                    <span>ReactJs</span><br />
                    <ProgressBar completed = {80} width ={500} bgColor='#ecea76'/> <br />
                    <br />
                    
                </h3>
                
                </div>
                <div id ='myCarousel1'>
                    <h1>
                    <span>Check out some of my works...</span>
                    </h1>
                </div>
           
             </div>
               
            </section>
        )
    }
}

export default Resume;