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
                    </Col>
                </Row>
            </Container>
        </section>
        </div>
    );
  }
}

export default Resume;
