import React, {Component} from 'react';
import {Col, Container, Row} from "react-bootstrap";

class Main extends Component {


    render() {
        return (
            <div className="Main">
                <section className="hero-banner">
                    <div className='banner-text'>
                        <Container fluid>
                            <Row>
                                <Col xs={12} sm={8} md={8} lg={6}>
                                    <h6>Welcome to bridge</h6>
                                    <div className="divider"/>
                                    <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate,
                                        voluptates!</h1>
                                    <a href="/#" className='btn btn-primary mt-4'>get started now</a>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </section>
                <section className='top-boxes'>
                    <Container fluid>
                        <Row>
                            <Col xs={12} md={7} className="images-boxes p-0">
                                <div className="d-flex">
                                    <Col className="p-0 box box-1">
                                        <div className="box-text">
                                            <div className="box-title">
                                                <h3>interactive</h3>
                                                <div className="divider"/>
                                                <p className='small-text m-0'>Lorem ipsum dolor sit amet, consectetur
                                                    adipisicing elit. Repellendus, repudiandae!</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col className="p-0 box box-2">
                                        <div className="box-text">
                                            <div className="box-title">
                                                <h3>identity</h3>
                                                <div className="divider"/>
                                                <p className='small-text m-0'>Lorem ipsum dolor sit amet, consectetur
                                                    adipisicing elit. Repellendus, repudiandae!</p>
                                            </div>
                                        </div>
                                    </Col>
                                </div>
                            </Col>
                            <Col className="text-box pr-0 pl-0">
                                <Col className="p-0 box box-3">
                                    <div className="box-text padding">
                                        <h2>Driving ideas into innovative products since 2000.</h2>
                                        <div className="divider bg-white"/>
                                        <a className='link'>VIEW ALL SERVICES </a>
                                    </div>
                                </Col>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </div>
        );
    }
}

Main.propTypes = {};

export default Main;
