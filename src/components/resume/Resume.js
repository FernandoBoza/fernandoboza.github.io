import React, { Component } from 'react';
import { Container, Row, Col, Progress } from 'reactstrap';
import WOW from 'wowjs';
import './resume.min.css';

class Resume extends Component {
  componentDidMount() {
    new WOW.WOW().init();
  }
  render() {
    return (
      <div className="mb-9" id="resume">
        <section className="mt-5 mb-9 wow fadeIn" data-wow-duration="1000ms" data-wow-delay="300ms">
          <Container>
            <Row>
              <Col className="right-border" lg="4" xs="12">
                <div className="logo">
                  <h1>FB</h1>
                </div>

                <h3 className="my-6 right-line">
                  <span>CONTACT</span>
                </h3>

                <ul>
                  <li className="left-list">
                    <i className="fa fa-phone" aria-hidden="true" />
                  </li>
                  <li className="right-list">
                    <a href="tel:786-870-3646">Tel: 786 870 3646</a>
                  </li>
                </ul>
                <ul>
                  <li className="left-list">
                    <i className="fa fa-at" aria-hidden="true" />
                  </li>
                  <li className="right-list">
                    <a href="mailto:hi@fernandoboza.com" target="_blank" rel="noopener noreferrer">
                      hi@fernandoboza.com
                    </a>
                  </li>
                </ul>
                <ul>
                  <li className="left-list">
                    <i className="fa fa-linkedin" aria-hidden="true" />
                  </li>
                  <li className="right-list">
                    <a
                      href="https://www.linkedin.com/in/fboza/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      linkedin.com/in/fboza
                    </a>
                  </li>
                </ul>

                <h3 className="my-6 right-line">
                  <span>SOFTWARE</span>
                </h3>

                <ul className="progress-list">
                  <li className="left-list">Javascript</li>
                  <Progress className="right-list" animated color="primary" value="95" />
                </ul>

                <ul className="progress-list">
                  <li className="left-list">Python</li>
                  <Progress className="right-list" animated color="primary" value="80" />
                </ul>

                <ul className="progress-list">
                  <li className="left-list">PHP</li>
                  <Progress className="right-list" animated color="primary" value="70" />
                </ul>

                <ul className="progress-list">
                  <li className="left-list">C++</li>
                  <Progress className="right-list" animated color="primary" value="70" />
                </ul>

                <ul className="progress-list">
                  <li className="left-list">C</li>
                  <Progress className="right-list" animated color="primary" value="60" />
                </ul>

                <ul className="progress-list">
                  <li className="left-list">SQL</li>
                  <Progress className="right-list" animated color="primary" value="30" />
                </ul>

                <h3 className="my-6 right-line">
                  <span>LANGUAGE</span>
                </h3>

                <ul className="h4">
                  <li>English</li>
                  <li>Spanish</li>
                  <li>French</li>
                </ul>
              </Col>

              <Col lg="8" xs="12" className="pl-9 col-2">
                <h1>Fernando Boza</h1>
                <h3>Software Developer</h3>

                <h3 className="mt-11 right-line_r">
                  <span>PROFILE</span>
                </h3>
                <p className="para-text text-justify">
                  I’m a self taught developer with more than a 6,000 hours of research, in work
                  experience, and management. By trade i’m a designer, with a strong focus in animation.
                  I first learned the basics of HTML and CSS, from there I moved onto PHP, Objective-C
                  migrating to Javascript in 2015. Moving back to Miami, I honed in my backend and
                  frontend experience in JS application development. Leaning towards data structure and
                  algorithm.
                </p>

                <p className="para-text text-jusitfy mt-5">
                  Literate in{' '}
                  <b>
                    HTML5, CSS3, jQuery, React, Angular 2, Node, Express, MongoDB, Python, and mySQL.
                  </b>
                </p>

                <h3 className="my-7 right-line_r">
                  <span>WORK EXPERIENCE</span>
                </h3>

                <div className="work_experience">
                  <Row>
                    <Col lg="7">
                      <h5>Digital Designer</h5>
                    </Col>
                    <Col>
                      <h5>Oct 2017 - Present</h5>
                    </Col>
                  </Row>
                  <h5 className="para-text">THR33FOLD</h5>
                  <ul>
                    <li>
                      I was responsible for designing, developing websites for clients and building
                      application for internal use.
                    </li>
                    <li>
                      Using a strong foundation of CSS and JS, my responsiblities ranged from concept,
                      research, scoping the project, developing and deployment. Light logo concept and
                      design.
                    </li>
                    <li>
                      Day to day technologies included WordPress, PHP, jQuery, React, Redux, Node,
                      Express, Mongo, SQL, and Sass.
                    </li>
                  </ul>
                </div>

                <div className="work_experience">
                  <Row>
                    <Col lg="7">
                      <h5>Lead Developer</h5>
                    </Col>
                    <Col>
                      <h5>Dec 2016 - Mar 2017</h5>
                    </Col>
                  </Row>
                  <h5 className="para-text">Social Wolf Media</h5>
                  <ul>
                    <li>
                      I was responsible for designing, developing, updating and managing all of our
                      websites.
                    </li>
                    <li>
                      With a strong focus on e-commerce sites using Woo Com- merce, and custom built CMS.
                    </li>
                    <li>
                      Day to day technologies included WordPress, PHP, jQuery, Node, Express, Mongo and
                      Sass
                    </li>
                  </ul>
                </div>

                <div className="work_experience">
                  <Row>
                    <Col lg="7">
                      <h5>Developer Writer</h5>
                    </Col>
                    <Col>
                      <h5>Jul 2016 - Feb 2017</h5>
                    </Col>
                  </Row>
                  <h5 className="para-text">BeMyApp</h5>
                  <ul>
                    <li>
                      Research different developer communuties, explore and write tutorials on topics
                      ranging from Swift, Electron, ES6, React Native and more.
                    </li>
                  </ul>
                </div>

                <div className="work_experience">
                  <Row>
                    <Col lg="7">
                      <h5>Project Manager</h5>
                    </Col>
                    <Col>
                      <h5>Nov 2014 - July 2016</h5>
                    </Col>
                  </Row>
                  <h5 className="para-text">BeMyApp | Paris</h5>
                  <ul>
                    <li>Manage developer communities in UK, Spain, Germany, and France</li>
                    <li>Work with clients on logistics and marketing</li>
                    <li>Responsible for outreach and social media</li>
                    <li>Web design and development</li>
                  </ul>
                </div>

                <div className="work_experience">
                  <Row>
                    <Col lg="7">
                      <h5>Lead Graphic Designer</h5>
                    </Col>
                    <Col>
                      <h5>2012 - 2014</h5>
                    </Col>
                  </Row>
                  <h5 className="para-text">MegaTV | Miami</h5>
                  <ul>
                    <li>Worked with producers and director for daily graphics</li>
                    <li>Manage design team for graphic packages</li>
                    <li>Responsible for motion graphics and photo manipulation</li>
                  </ul>
                </div>

                <h3 className="my-7 right-line_r">
                  <span>Education</span>
                </h3>

                <div className="work_experience">
                  <Row>
                    <Col lg="7">
                      <h5>Bachelors in Digital Graphics & Production</h5>
                    </Col>
                    <Col>
                      <h5>2007 - 2011</h5>
                    </Col>
                  </Row>
                  <h5 className="para-text">Miami Int University of Art & Design</h5>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    );
  }
}

export default Resume;
