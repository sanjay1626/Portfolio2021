import React, {Component} from 'react';
import Project1 from '../img/portfolio/TheBrewery.png'
import Project2 from '../img/portfolio/Project2.png'
import Project3 from '../img/portfolio/WeatherDashboard.png'
import Project4 from '../img/portfolio/employeedirectory.png'
import Project5 from '../img/portfolio/Project5.png'
class Portfolio extends Component {
    render () {
        return(
                    <div className ="flex-container" id="portfolio">
                    <div id="myCarousel" className="carousel slide" data-ride="carousel">
            {/* Wrapper for slides */}
            <div className="carousel-inner">
              <div className="item active">
                <img src={ Project1} alt='Project1'/> 
                <div class="carousel-caption">
                  <h4><a href="https://cdrobinsoniii.github.io/brewery-tour/ ">Brewery Tour </a>
                  <a href=" https://github.com/CDRobinsonIII/brewery-tour" ><i class="fab fa-github"></i></a></h4>
                  <ul>
                    <li>Our group created a web application that searched for local micro breweries in the city the user typed in the search box. The goal of the web application was to generate a brewery tasting tour map based on the user's choices from the list of breweries provided.</li>
                    
                  </ul>
                  
              </div>
              </div>{/* End Item */}
              <div className="item">
                <img src={Project2} alt='Project2'/>
                <div class="carousel-caption">
                  <h4><a href="https://ness-project.herokuapp.com/">Severe Weather Alert (SWA) </a>
                  <a href=" https://github.com/highwolfx/severe-weather-alerts" ><i class="fab fa-github"></i></a></h4>
                  <ul>
                    <li>
                    Our group created a web application to sign up for severe weather alerts, focused on earthquakes in your desired location.
                    </li>
                   
                  </ul>
                  
              </div>
              </div>{/* End Item */}
              <div className="item">
              <img src={Project3} alt='Project3'/>
                <div class="carousel-caption">
                  <h4><a href="https://sanjay1626.github.io/Weather-Dashboard/">Weather Forcast Dashboard </a>
                  <a href="https://github.com/sanjay1626/Weather-Dashboard.git" ><i class="fab fa-github"></i></a></h4>
                  <ul>
                    <li>
                    Weather Dashboard that shows current and 5-days forecast
                    </li>
                   
                  </ul>
                </div>
              </div>
              <div className="item">
                <img src={Project4} alt ='Project4'/>
                <div class="carousel-caption">
                  <h4><a href="https://sanjay1626.github.io/Employee-Directory/">Employee Directory </a>
                  <a href="https://github.com/sanjay1626/Employee-Directory.git" ><i class="fab fa-github"></i></a></h4>
                  <ul>
                    <li>
                    Search and view employee information
                    </li>
                   
                  </ul>
                </div>
              </div>
              <div className="item">
                <img src={Project5} alt ='Project5' />
                <div class="carousel-caption">
                  <h4><a href="https://drive.google.com/file/d/19VeQr7q0brCgmRHAuJwkXTsUKZQATwmS/view">Exquisite Corpse Sound Bath </a>
                  <a href="https://github.com/sanjay1626/Exquisite-Corpse-Sound-Bath-.git" ><i class="fab fa-github"></i></a></h4>
                  <ul>
                    <li>
                    Our group created a music application that will randomly select three beats from the database and play along with recorded sound by user.

                    </li>
                   
                  </ul>
                </div>
              </div>{/* End Item */}
              
            </div>{/* End Carousel Inner */}
           
            {/* Controls */}
            <div className="carousel-controls">
              <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                <span className="glyphicon glyphicon-chevron-left" />
              </a>
              <a className="right carousel-control" href="#myCarousel" data-slide="next">
                <span className="glyphicon glyphicon-chevron-right" />
              </a>
            </div>
              
          </div>
            </div>
            
           
            
            
        
      
        )
    }
}

export default Portfolio;