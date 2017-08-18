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
        <div className='mb-9' id='resume'>

        <section className='mt-5 mb-9 wow fadeIn' data-wow-duration="1000ms" data-wow-delay="300ms">
            <Container>
                <Row>
                    <Col className="right-border" lg='4'  xs='12'>
                    <div className="logo">
                        <h1>FB</h1>
                    </div>
                    
                    <h3 className='my-6 right-line'>
                        <span>CONTACT</span>
                    </h3>
                    
                    <ul>
                        <li className='left-list'><i className="fa fa-phone" aria-hidden="true"></i></li>
                        <li className='right-list'><a href="tel:786-870-3646">Tel: 786 870 3646</a></li>
                    </ul>
                    <ul>
                        <li className='left-list'><i className="fa fa-at" aria-hidden="true"></i></li>
                        <li className='right-list'>
                        <a href="mailto:hi@fernandoboza.com" target="_blank" rel="noopener noreferrer">hi@fernandoboza.com</a>
                        </li>
                    </ul>
                    <ul>
                        <li className='left-list'><i className="fa fa-linkedin" aria-hidden="true"></i></li>
                        <li className='right-list'>
                        <a href="https://www.linkedin.com/in/fboza/" target='_blank' rel="noopener noreferrer">linkedin.com/in/fboza</a>
                        </li>
                    </ul>
                    
                    <h3 className='my-6 right-line'>
                        <span>SOFTWARE</span>
                    </h3>
                    
                    <ul className='progress-list'>
                        <li className='left-list'>
                        Photoshop
                        </li>
                        <Progress className='right-list' animated color="primary" value='95'></Progress>
                    </ul>
                    
                    <ul className='progress-list'>
                        <li className='left-list'>
                        Illustrator
                        </li>
                        <Progress className='right-list' animated color="primary" value='90'></Progress> 
                    </ul>
                    
                    <ul className='progress-list'>
                        <li className='left-list'>
                        HTML5
                        </li>
                        <Progress className='right-list' animated color="primary" value='96'></Progress> 
                    </ul>
                    
                    <ul className='progress-list'>
                        <li className='left-list'>
                        CSS3 | SCSS
                        </li>
                        <Progress className='right-list' animated color="primary" value='90'></Progress> 
                    </ul>
                    
                    <ul className='progress-list'>
                        <li className='left-list'>
                        React.js 
                        </li>
                        <Progress className='right-list' animated color="primary" value='80'></Progress>
                    </ul>
                    
                    <ul className='progress-list'>
                        <li className='left-list'>
                        jQuery
                        </li>
                        <Progress className='right-list' animated color="primary" value='93'></Progress>
                    </ul>
                    
                    <h3 className='my-6 right-line'>
                        <span>LANGUAGE</span>
                    </h3>
                    
                    <ul className='h4'>
                        <li>English</li>
                        <li>Spanish</li>
                        <li>French</li>
                    </ul>
                    
                    </Col> 
                    
                    <Col lg='7' xs='12' className='pl-9 col-2'>
                        <h1>Fernando Boza</h1>
                        <h3>Creative Director</h3>

                        <h3 className='mt-11 right-line_r'>
                           <span>PROFILE</span>
                        </h3>
                        <p className='para-text text-justify'>I'm by craft a designer with over 7 years 
                           of experience in web design, web development, 3D, and graphic design. For the 
                           past 2 years I have organised developer communities in London, Barcelona, Munich, 
                           Berlin, Paris, Amsterdam, and Bucharest. As well as working with clients such as Intel,
                           Microsoft, Salesforce, McDonalds, HP, Samsung, Tesco, AB InBev, NBC Universal and many more.
                        </p>

                        <p className="para-text text-jusitfy mt-5">
                           Literate in <b>HTML5, CSS3, jQuery, React, Angular 2, Node, Express, MongoDB, Swift and PHP.</b>
                        </p>

                        <h3 className='my-7 right-line_r'>
                           <span>WORK EXPERIENCE</span>
                        </h3>

                        <div className="work_experience">
                           <Row>
                              <Col><h5>Developer Writer</h5></Col>
                              <Col><h5>July 2016 - Feb 2017</h5></Col>
                           </Row>
                           <h5 className="para-text">BeMyApp</h5>
                           <ul>
                              <li>Write articles and tutorials revolving the developer community</li>
                              <li>Research and write on Javascript frameworks and libraries</li>
                           </ul>
                        </div>
                        
                        <div className="work_experience">
                           <Row>
                              <Col><h5>Project Manager</h5></Col>
                              <Col><h5>Nov 2014 - July 2016</h5></Col>
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
                              <Col><h5>Lead Graphic Designer</h5></Col>
                              <Col><h5>2012 - 2014</h5></Col>
                           </Row>
                           <h5 className="para-text">MegaTV | Miami</h5>
                           <ul>
                              <li>Worked with producers and director for daily graphics</li>
                              <li>Manage design team for graphic packages</li>
                              <li>Responsible for motion graphics and photo manipulation</li>
                           </ul>
                        </div>

                        <h3 className='my-7 right-line_r'>
                           <span>Education</span>
                        </h3>

                    </Col>
                </Row>
            </Container>
        </section>
        </div>
    );
  }
}

export default Resume;
