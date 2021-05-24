import React, { Component} from 'react';
import profilepic from '../img/Avatar.jpg'
import Social from './Social'
import ReactTypingEffect from 'react-typing-effect';
class Home extends Component{
    render(){
        return(
            <header id="home">
                  <nav id ="nav-wrap">
                      {/* For mobile */}
                        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	                    <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>
                
                        <ul id="nav" className="nav">
                            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                            <li><a className="smoothscroll" href="#about">About</a></li>
	                        <li><a className="smoothscroll" href="#resume">Resume</a></li>
                            <li><a className="smoothscroll" href="#portfolio">Works</a></li>
                            <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
                    
                            <li><a className="smoothscroll" href="#contact">Contact</a></li>
                        </ul>
                        
                        
                  </nav>
                  <div className="row banner">
                      <div className = "banner-text">
                          <h1 className="responsive-headline">
                          <img src={profilepic} className = "profilepic" alt="Sanjay Gonsalves"></img>
                          <ReactTypingEffect className="typingeffect" text={['Hi, I am Sanjay Gonsalves','San Diego Web Developer']} speed={60} eraseDelay={700}/>
                          </h1>
                          <hr />
                         <h3>
                             <Social />
                         </h3>
                      </div>
                      
                  </div>
                  <p className="scrolldown">
                        <a className="smoothscroll" href="#about"><i class="fas fa-arrow-circle-down"></i></a>
                  </p>
                
            </header>
        )
    }
}
export default Home