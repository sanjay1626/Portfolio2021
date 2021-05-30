import React, { Component } from 'react';

class Footer extends Component{
    render(){
        return(
          <footer>
            <div className="row" >
                <div className = "col">
                    <ul className ="social-links">
                        <li> <a href="https://github.com/sanjay1626" ><i className="fab fa-github"></i> </a></li>
                        <li><a href="https://Instagram.com" ><i className="fab fa-instagram"></i> </a></li>
                        <li><a href="https://www.facebook.com/sanjay.gonsalves.96" ><i className="fab fa-facebook-f"></i> </a></li>
                        <li><a href="www.linkedin.com/in/sanjay-gonsalves-61a74b39" ><i className="fab fa-linkedin-in"></i> </a></li>
                    
                    
                    <div className ='copyright'>
                           
                        <li>&copy; Copyright 2021 Sanjay Gonsalves</li>
                        <li>Design by <a title="Styleshout" href="https://github.com/sanjay1626">Monkey@Brains</a></li>
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