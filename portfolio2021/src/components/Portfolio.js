import React, {Component} from 'react';


class Portfolio extends Component {
    render () {
        return(
             
              
                    <div className ="flex-container" id="portfolio">
                    <div id="myCarousel" className="carousel slide" data-ride="carousel">
            {/* Wrapper for slides */}
            <div className="carousel-inner">
              <div className="item active">
                <img src="https://www.cifras.com.br/arquivos/artistas/l/led_zeppelin_02_big.jpg" /> 
                <div class="carousel-caption">
                  <h4><a href="#">LedZeppelin</a></h4>
                  <p>Led Zeppelin were an English rock band formed in London in 1968. The group consisted of vocalist Robert Plant, guitarist Jimmy Page, bassist/keyboardist John Paul Jones, and drummer John Bonham.</p>
              </div>
              </div>{/* End Item */}
              <div className="item">
                <img src="https://jazzdesk.files.wordpress.com/2019/11/ron_carter_danny_simmons_brown_beatnik_tomes.jpg" />
                <div class="carousel-caption">
                  <h4><a href="#">Ron Carter & Danny Simmons</a></h4>
                  <p>The Brown Beatnik Tomes – Live at BRIC House is a unique and powerful collaboration between poet/artist Danny Simmons and legendary jazz bassist Ron Carter. </p>
              </div>
              </div>{/* End Item */}
              <div className="item">
                <img src="https://floridatheatre.showare.com/uplimage/TicketBanner-CALZeppelinII.JPG" />
                
              </div>{/* End Item */}
              <div className="item">
                <img src="http://hardrockhaven.net/online/wp-content/uploads/2020/10/Wildness.jpg" />
                
              </div>{/* End Item */}
              <div className="item">
                <img src="https://www.cifras.com.br/arquivos/artistas/b/black_sabbath_2013_02_big.jpg" />
                
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