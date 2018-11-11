import React, { Component } from 'react';
import WOW from 'wowjs';
import 'animate.css/animate.css';
import CountTo from 'react-count-to';

// ReactStrap Components
import { Progress, Media } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import { Card, CardImg, CardTitle, CardText, CardDeck, CardBlock } from 'reactstrap';

// App Components
import hill from '../../img/hill.png';
import house from '../../img/house.png';
import sun from '../../img/sun.png';
import birds1 from '../../img/birds1.png';
import birds2 from '../../img/birds2.png';
import frontendImg from '../../img/frontend.jpg';
import backendImg from '../../img/backend.jpg';
import moi from '../../img/moi.png';
import ProjMan from '../../img/projMan.jpg';
import contactImg from '../../img/under.png';
import Obama from '../../img/profile1.png';
import daRock from '../../img/profile2.png';

class Home extends Component {
  constructor(props) {
    super(props);

    this.increase = this.increase.bind(this);
    this.state = { percent: 0, isHide: false };
  }

  componentDidMount() {
    this.increase();
    new WOW.WOW().init();
  }

  increase() {
    const percent = this.state.percent + 1;
    if (percent >= 51) {
      return;
    }
    this.setState({ percent });
    this.tm = setTimeout(this.increase, 10);
  }

  render() {
    return (
      <div>
        <section id="home-slider">
          <Container className="home-slider-container">
            <div className="main-slider animate-in">
              <Row>
                <div className="main-slider animate-in">
                  <div className="slide-text">
                    <h1 className="thin">
                      Who am I?{' '}
                      <span role="img" aria-label="Ponder">
                        🤔
                      </span>
                    </h1>
                    <p className="text-justify">
                      Designer by craft, expanded into programming and web development. Passion for web
                      technologies, data structure, reusable components, clean patterns, and design.
                    </p>
                    <p className="bold text-justify">
                      Clients include Intel, AB-Inbev, SBS Broadcast, Interinvestment, Salesforce, and
                      many more.
                    </p>
                    <p className="bold text-justify">
                      Collaborated with IBM, Aurelia, Kii, Sigfox, Kickstarter, and the things.iO
                    </p>
                  </div>

                  <img src={hill} className="slider-hill hidden-md-down" alt={'slider'} />
                  <img src={house} className="slider-house hidden-md-down" alt={'slider'} />
                  <img src={sun} className="slider-sun hidden-md-down" alt={'slider'} />
                  <img src={birds1} className="slider-birds1 hidden-md-down" alt={'slider'} />
                  <img src={birds2} className="slider-birds2 hidden-md-down" alt={'slider'} />
                </div>
              </Row>
            </div>
          </Container>
        </section>

        <section id="services" className="my-7">
          <Container>
            <CardDeck>
              <Card className="wow fadeIn" data-wow-duration="1000ms" data-wow-delay="300ms">
                <CardImg
                  top
                  width="100%"
                  src={frontendImg}
                  alt="Card image cap"
                  className="wow scaleIn"
                  data-wow-duration="500ms"
                  data-wow-delay="300ms"
                />
                <CardBlock>
                  <CardTitle>Front-End</CardTitle>
                  <CardText className="text-justify">
                    Front-End using HTML5, Sass, React, jQuery, Bootstrap, and Gulp.
                  </CardText>
                </CardBlock>
              </Card>
              <Card className="wow fadeIn" data-wow-duration="1000ms" data-wow-delay="600ms">
                <CardImg
                  top
                  width="100%"
                  src={backendImg}
                  alt="Card image cap"
                  className="wow scaleIn"
                  data-wow-duration="500ms"
                  data-wow-delay="600ms"
                />
                <CardBlock>
                  <CardTitle>Back-End</CardTitle>
                  <CardText className="text-justify">
                    Back-End using Node, Express, and MongoDB, and PHP.
                  </CardText>
                </CardBlock>
              </Card>
              <Card className="wow fadeIn" data-wow-duration="1000ms" data-wow-delay="900ms">
                <CardImg
                  top
                  width="100%"
                  src={ProjMan}
                  alt="Card image cap"
                  className="wow scaleIn"
                  data-wow-duration="500ms"
                  data-wow-delay="900ms"
                />
                <CardBlock>
                  <CardTitle>Project Manager</CardTitle>
                  <CardText className="text-justify">
                    Organized projects for clients across EU, US and the internet, built up and managed
                    developer communities across EMEA.
                  </CardText>
                </CardBlock>
              </Card>
            </CardDeck>
          </Container>
        </section>

        <section className="action mt-7">
          <Container className="pt-4">
            <Row className="count">
              <Col
                xs="12"
                md="3"
                className="text-center wow bounceIn"
                data-wow-duration="1000ms"
                data-wow-delay="300ms"
              >
                <h1 className="thin blue">
                  <CountTo to={24} speed={2234} />
                </h1>
                <h3>Happy Clients</h3>
                <h1>
                  <span className="emoji-home" role="img" aria-label="Smile">
                    😁
                  </span>
                </h1>
              </Col>
              <Col
                xs="12"
                md="3"
                className="text-center wow bounceIn"
                data-wow-duration="1000ms"
                data-wow-delay="300ms"
              >
                <h1 className="thin blue">
                  <CountTo to={6} speed={1234} />
                </h1>
                <h3>Years in Business</h3>
                <h1>
                  <span className="emoji-home" role="img" aria-label="Muscle">
                    💪
                  </span>
                </h1>
              </Col>
              <Col
                xs="12"
                md="3"
                className="text-center wow bounceIn"
                data-wow-duration="1000ms"
                data-wow-delay="300ms"
              >
                <h1 className="thin blue">
                  <CountTo to={432} speed={4000} />
                </h1>
                <h3>Cups of Coffee</h3>
                <h1>
                  <span className="emoji-home" role="img" aria-label="Coffee">
                    ☕️
                  </span>
                </h1>
              </Col>
              <Col
                xs="12"
                md="3"
                className="text-center wow bounceIn"
                data-wow-duration="1000ms"
                data-wow-delay="300ms"
              >
                <h1 className="thin blue">
                  <CountTo to={240} speed={3234} />
                </h1>
                <h3>Total Projects</h3>
                <h1>
                  <span className="emoji-home" role="img" aria-label="Laptop">
                    💻
                  </span>
                </h1>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="my-7 bio">
          <Container>
            <Row>
              <Col
                xs="12"
                md="7"
                className="wow fadeInLeft"
                data-wow-duration="1000ms"
                data-wow-delay="300ms"
              >
                <h2 className="thin">About</h2>
                <Row>
                  <Col xs="12" md="5">
                    <img src={moi} alt="Fernando Boza" className="img-fluid rounded" />
                  </Col>
                  <Col md="7">
                    <h3>411</h3>
                    <p className="text-justify">
                      I was born in Miami, Florida. I graduated Miami Int University of Art & Design(BA
                      2010). I've drifted towards full stack development with a range of technologies
                      such as. <br />
                      <br />{' '}
                      <b>
                        HTML5, CSS3, Sass, ES6, NodeJS, Express, MongoDB, jQuery, Angular 2, React, Swift
                        and PHP.
                      </b>{' '}
                      In 2014 I moved to Paris to work as community manager for communities of developers
                      in Barcelona, London, Munich, Paris, and Berlin. In Europe I honed and developed my
                      skills as a JS developer and also studying various different programming languages
                    </p>
                  </Col>
                </Row>
              </Col>
              <Col md="5" className="wow fadeInRight" data-wow-duration="1000ms" data-wow-delay="300ms">
                <h2 className="thin">Skill</h2>
                <div className="single-skill my-4">
                  <h6 className="thin">Front-End Development</h6>
                  <Progress animated color="info" value={this.state.percent + 40}>
                    {this.state.percent + 40}
                  </Progress>
                </div>
                <div className="single-skill my-4">
                  <h6 className="thin">Back-End Development</h6>
                  <Progress animated color="info" value={this.state.percent + 25}>
                    {this.state.percent + 25}
                  </Progress>
                </div>
                <div className="single-skill my-4">
                  <h6 className="thin">Project Management</h6>
                  <Progress animated color="info" value={this.state.percent + 50}>
                    {this.state.percent + 50}
                  </Progress>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="mt-7 contact">
          <Container>
            <Row>
              <Col className="text-center bottom-separator">
                <img className="goopImg hidden-md-down" src={contactImg} alt="contact form " />
              </Col>
              <Col xs={{ size: 12, offset: 0 }} md={{ size: 6, offset: 2 }}>
                <h2 className="thin">Testimonial</h2>

                <Media>
                  <Media left>
                    <Media object src={Obama} alt="Generic" className="mr-3 rounded" />
                  </Media>
                  <blockquote className="blockquote pl-0">
                    <h5 className="mb-0">Not too bad of a guy.</h5>
                    <footer className="blockquote-footer">B. Obama</footer>
                  </blockquote>
                </Media>

                <Media className="mt-5">
                  <Media left>
                    <Media object src={daRock} alt="Generic" className="mr-3 rounded" />
                  </Media>
                  <blockquote className="blockquote pl-0">
                    <h5 className="mb-0">Best spotter anyone can have.</h5>
                    <footer className="blockquote-footer">D. Johnson</footer>
                  </blockquote>
                </Media>
              </Col>
              <Col>
                <h2 className="thin">Contact</h2>
                <h6 className="contact-email">
                  Email: <a href="mailto:hi@fernandoboza.com">Hi@FernandoBoza.com</a>
                </h6>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    );
  }
}

export default Home;
