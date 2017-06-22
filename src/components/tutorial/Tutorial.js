import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { ListGroup, ListGroupItem } from 'reactstrap';
import WOW from 'wowjs';

class Tutorial extends Component {

    componentDidMount() {
        new WOW.WOW().init();
    }
    render() {
    return (
        <div className='mb-9' id='tutorial'>

        <section className='p action wow fadeIn' data-wow-duration="1000ms" data-wow-delay="300ms">
        <Container className='pt-5'>
            <Row>
                <Col className="wow slideInLeft" data-wow-duration="1000ms" data-wow-delay="300ms">
                    <h1 className="thin">Tutorial</h1>
                    <h5>Developent Tutorials</h5>
                </Col>
            </Row>
        </Container>
        </section>

            <section className='mt-5 mb-9 wow fadeIn' data-wow-duration="1000ms" data-wow-delay="300ms">
                <Container>
                    <Row>
                        <ListGroup>
                            <ListGroupItem tag="a" target='_blank' href="http://media.bemyapp.com/ecmascript-2015-variables-functions-classes/" action>ECMAScript 2015 Variables, Functions, and Classes</ListGroupItem>
                            <ListGroupItem tag="a" target='_blank' href="http://media.bemyapp.com/getting-started-electron-part-deux/" action>Getting Started with Electron: Part Deux</ListGroupItem>
                            <ListGroupItem tag="a" target='_blank' href="http://media.bemyapp.com/transpiling-babel-gulp/" action>Transpiling With Babel and Gulp</ListGroupItem>
                            <ListGroupItem tag="a" target='_blank' href="http://media.bemyapp.com/lets-git-started-github/" action>Let’s GIT Started with GitHub</ListGroupItem>
                            <ListGroupItem tag="a" target='_blank' href="http://media.bemyapp.com/sass-ing-css/" action>Sass-ing Up Your CSS</ListGroupItem>
                            <ListGroupItem tag="a" target='_blank' href="http://media.bemyapp.com/intro-swift-3/" action>Intro To Swift 3</ListGroupItem>
                            <ListGroupItem tag="a" target='_blank' href="http://media.bemyapp.com/building-rollover-effect-css/" action>Building a Rollover Effect in CSS</ListGroupItem>
                            <ListGroupItem tag="a" target='_blank' href="http://media.bemyapp.com/intro-gulp-glory/" action>Intro to Gulp and all its glory</ListGroupItem>
                            <ListGroupItem tag="a" target='_blank' href="http://media.bemyapp.com/lets-build-chat-app-socket-io-angular/" action>Let’s Build a Chat App with Socket.io and Angular</ListGroupItem>
                            <ListGroupItem tag="a" target='_blank' href="http://media.bemyapp.com/getting-started-building-desktop-apps-html5-css-js/" action>Getting Started Building Desktop Apps with HTML5, CSS and JS</ListGroupItem>
                        </ListGroup>
                    </Row>
                </Container>
            </section>
        </div>
    );
  }
}

export default Tutorial;

