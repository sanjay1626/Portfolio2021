import React, { Component } from 'react';
import Social from './Social'
class Footer extends Component{
    render(){
        return(
          <footer>
            <div className="row" >
                <div className = "col">
                    <ul className ="social-links">
                       
                    
                    <div className ='copyright'>
                        <li>&copy; Copyright 2021 Sanjay Gonsalves</li>
                        <li>Design by <a title="Styleshout" href="https://github.com/sanjay1626">Monkey@Brain</a></li>
                    </div>  
                    </ul>            
                </div>
            </div>
            <div id ='go-top'>
            <a  className="smoothscroll" href="#home"><i className="fas fa-arrow-circle-up"></i></a>
            </div>
            
     
          </footer>

            
        )
    }
}

export default Footer;