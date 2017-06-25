import React, { Component } from 'react';

import WOW from 'wowjs';
import { Container, Row, Col } from 'reactstrap';
import { Card, Button, CardImg, CardTitle, CardText, CardDeck, CardBlock } from 'reactstrap';

// Images 
import meanapp from '../../img/portfolio/meanapp.jpg';
import swm from '../../img/portfolio/swm.jpg';
import tripsmack from '../../img/portfolio/2.jpg';
import jwlry from '../../img/portfolio/3.jpg';
import st8ottaParis from '../../img/portfolio/6.jpg';
import demo from '../../img/portfolio/8.jpg';
import github from '../../img/portfolio/9.jpg';
import behance from '../../img/portfolio/10.jpg';
import reactfb from '../../img/portfolio/homepg.png'; 
import ds1 from '../../img/portfolio/ds1.jpg'; 
import umbrallaCorp from '../../img/portfolio/umbrellaCorp.png'; 
import bs4_gen from '../../img/portfolio/bs4-gen.png'; 

// import miaFit from '../../img/portfolio/miaFit.jpg';
// import marj from '../../img/portfolio/marj.jpg';
// import flyAca from '../../img/portfolio/flyaca.jpg';

import 'animate.css/animate.css';

class Portfolio extends Component {
  componentDidMount() {
    new WOW.WOW().init();
  }

  render() {
    return (
      <div id='portfolio'>

        <section className='p action wow fadeIn' data-wow-duration="1000ms" data-wow-delay="300ms">
          <Container className='pt-5'>
            <Row>
              <Col className="wow slideInLeft" data-wow-duration="1000ms" data-wow-delay="300ms">
                <h1 className="thin">Portfolio</h1>
                <h5>My Work</h5>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="mt-5 wow fadeIn" data-wow-duration="1000ms" data-wow-delay="300ms">
          <Container>
            <Row>
              <CardDeck>
                <Card>
                  <CardImg top width="100%" src={bs4_gen} alt="Fernando Boza Portfolio" />
                  <CardBlock className='d-flex flex-column'>
                    <CardTitle>Bootstrap 4 NPM Package</CardTitle>
                    <CardText>A node module that generates a bootstrap 4 ready project, and wired with Gulp and Babel for ES6 and Sass</CardText>
                    <a href="https://www.npmjs.com/package/bootstrap-4-generator" target='_blank' rel="noopener noreferrer" className='d-flex align-self-end'><Button block color='primary'>Go</Button></a>
                  </CardBlock>
                </Card>
                <Card>
                  <CardImg top width="100%" src={umbrallaCorp} alt="Fernando Boza Portfolio" />
                  <CardBlock className='d-flex flex-column'>
                    <CardTitle>Umbrella Corp Mockup</CardTitle>
                    <CardText>Built with Bootstrap 4, Sass, TweenMax.JS and Hover.CSS</CardText>
                    <a href="http://fernandoboza-ds2.surge.sh/" target='_blank' rel="noopener noreferrer" className='d-flex align-self-end'><Button block color='primary'>Go</Button></a>
                  </CardBlock>
                </Card>
                <Card>
                  <CardImg top width="100%" src={ds1} alt="Fernando Boza Portfolio" />
                  <CardBlock className='d-flex flex-column'>
                    <CardTitle>Demo Site</CardTitle>
                    <CardText>Built with React, React-Strap Bootstrap 4, Sass, Wow JS, Animate CSS and Hover CSS</CardText>
                    <a href="http://fernandoboza.com/ds1" target='_blank' rel="noopener noreferrer" className='d-flex align-self-end'><Button block color='primary'>Go</Button></a>
                  </CardBlock>
                </Card>
                <Card>
                  <CardImg top width="100%" src={reactfb} alt="Fernando Boza Portfolio" />
                  <CardBlock className='d-flex flex-column'>
                    <CardTitle>My Site</CardTitle>
                    <CardText>The current site you are seeing is a made up of React JS, Bootstrap 4, and Sass</CardText>
                    <a href="http://fernandoboza.com" target='_blank' rel="noopener noreferrer" className='d-flex align-self-end'><Button block color='primary'>Go</Button></a>
                  </CardBlock>
                </Card>
                
                {/*<Card>
                  <CardImg top width="100%" src={marj} alt="Fernando Boza Portfolio" />
                  <CardBlock className='d-flex flex-column'>
                    <CardTitle>MARS J Medical</CardTitle>
                    <CardText>Bootstrap, Sass</CardText>
                    <a href="http://mar-jmedical.com/lp_scooter" target='_blank' rel="noopener noreferrer" className='d-flex align-self-end'><Button block color='primary'>Go</Button></a>
                  </CardBlock>
                </Card>*/}
              </CardDeck>
            </Row>
          </Container>
        </section>
       
        <section className="mt-5 wow fadeIn" data-wow-duration="1000ms" data-wow-delay="300ms">
          <Container>
            <Row>
              <CardDeck>
                <Card>
                  <CardImg top width="100%" src={meanapp} alt="Fernando Boza Portfolio" />
                  <CardBlock className='d-flex flex-column'>
                    <CardTitle>Authentication and Authorization Kit</CardTitle>
                    <CardText>Mongo, Express, Angular 2, Node</CardText>
                    <a href="https://quiet-atoll-39136.herokuapp.com" target='_blank' rel="noopener noreferrer" className='d-flex align-self-end'><Button block color='primary'>Go</Button></a>
                  </CardBlock>
                </Card>
                <Card>
                  <CardImg top width="100%" src={swm} alt="Fernando Boza Portfolio" />
                  <CardBlock className='d-flex flex-column'>
                    <CardTitle>Social Wolf Media</CardTitle>
                    <CardText>HTML, Sass, jQuery, PHP, WordPress.</CardText>
                    <a href="http://socialwolfmedia.com/" target='_blank' rel="noopener noreferrer" className='d-flex align-self-end'><Button block color='primary'>Go</Button></a>
                  </CardBlock>
                </Card>
                {/*<Card>
                  <CardImg top width="100%" src={flyAca} alt="Fernando Boza Portfolio" />
                  <CardBlock className='d-flex flex-column'>
                    <CardTitle>Flying Academy</CardTitle>
                    <CardText>HTML, CSS, Wordpress.</CardText>
                    <a href="http://www.socialwolfmedia.com/FLYINGACADEMY/" target='_blank' rel="noopener noreferrer" className='d-flex align-self-end'><Button block color='primary'>Go</Button></a>
                  </CardBlock>
                </Card>*/}
                {/*<Card>
                  <CardImg top width="100%" src={miaFit} alt="Fernando Boza Portfolio" />
                  <CardBlock className='d-flex flex-column'>
                    <CardTitle>Mia-Fit LeadPage</CardTitle>
                    <CardText>HTML, CSS, PHP, Woocommerce, Wordpress</CardText>
                    <a href="http://www.miafitnessworkout.com/" target='_blank' rel="noopener noreferrer" className='d-flex align-self-end'><Button block color='primary'>Go</Button></a>
                  </CardBlock>
                </Card>*/}
                <Card>
                  <CardImg top width="100%" src={st8ottaParis} alt="Fernando Boza Portfolio" />
                  <CardBlock className='d-flex flex-column'>
                    <CardTitle>Straight Outta Paris</CardTitle>
                    <CardText>Swift, CoreLocation, Local Notification</CardText>
                    <a href="https://itunes.apple.com/us/app/straight-outta-paris/id1111754269" target='_blank' rel="noopener noreferrer" className='d-flex align-self-end'><Button block color='primary'>Go</Button></a>
                  </CardBlock>
                </Card>
                <Card>
                  <CardImg top width="100%" src={tripsmack} alt="Fernando Boza Portfolio" />
                  <CardBlock className='d-flex flex-column'>
                    <CardTitle>TripSmack</CardTitle>
                    <CardText>Logo Design and Concept</CardText>
                    <a href="../../include/TripSmack_V1.pdf" target='_blank' rel="noopener noreferrer" className='d-flex align-self-end'><Button block color='primary'>Go</Button></a>
                  </CardBlock>
                </Card>
              </CardDeck>
            </Row>
          </Container>
        </section>

        <section className="mt-5 wow fadeIn" data-wow-duration="1000ms" data-wow-delay="300ms">
          <Container>
            <Row>
              <CardDeck>
                <Card>
                  <CardImg top width="100%" src={demo} alt="Fernando Boza Portfolio" />
                  <CardBlock className='d-flex flex-column'>
                    <CardTitle>Demo Reel</CardTitle>
                    <CardText>Modeling, Animating, Rigging, SFX, Motion Graphics, Rendering and Lighting</CardText>
                    <a href="https://www.youtube.com/watch?v=ZuQEGSJ_P0Q" target='_blank' rel="noopener noreferrer" className='d-flex align-self-end'><Button block color='primary'>Go</Button></a>
                  </CardBlock>
                </Card>
                <Card>
                  <CardImg top width="100%" src={github} alt="Fernando Boza Portfolio" />
                  <CardBlock className='d-flex flex-column'>
                    <CardTitle>Github</CardTitle>
                    <CardText></CardText>
                    <a href="https://github.com/FernandoBoza" target='_blank' rel="noopener noreferrer" className='d-flex align-self-end'><Button block color='primary'>Go</Button></a>
                  </CardBlock>
                </Card>
                <Card>
                  <CardImg top width="100%" src={behance} alt="Fernando Boza Portfolio" />
                  <CardBlock className='d-flex flex-column'>
                    <CardTitle>Behance</CardTitle>
                    <CardText></CardText>
                    <a href="https://www.behance.net/fernandoboza" target='_blank' rel="noopener noreferrer" className='d-flex align-self-end'><Button block color='primary'>Go</Button></a>
                  </CardBlock>
                </Card>
                 <Card>
                  <CardImg top width="100%" src={jwlry} alt="Fernando Boza Portfolio" />
                  <CardBlock className='d-flex flex-column'>
                    <CardTitle>Jewelry Mockup</CardTitle>
                    <CardText>UI Mockup</CardText>
                    <a href="../../include/jewelryMockup.pdf" target='_blank' rel="noopener noreferrer" className='d-flex align-self-end'><Button block color='primary'>Go</Button></a>
                  </CardBlock>
                </Card>
              </CardDeck>
            </Row>
          </Container>
        </section>

      </div>
    );
  }
}

export default Portfolio;
