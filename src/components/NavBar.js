import React, {Component} from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Main from "./Main";
import About from "./About";
import '../assets/scss/index.scss'
import logo from "../assets/images/logo@2x.png";


class NavBar extends Component {
    render() {
        return (
            <div className='Bridge'>
                <Router>
                    <Navbar expand="lg">
                        <Navbar.Brand><img src={logo} width='154px' alt="logo"/></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                        <Navbar.Collapse className="justify-content-end">
                            <Nav>
                                <LinkContainer to="/main">
                                    <Nav.Link>MAIN</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to="/about">
                                    <Nav.Link>PAGES</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to="/a">
                                    <Nav.Link>PORTFOLIO</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to="/a">
                                    <Nav.Link>BLOG</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to="/a">
                                    <Nav.Link>FEATURES</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to="/a">
                                    <Nav.Link>COMPONENTS</Nav.Link>
                                </LinkContainer>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                    <Container fluid>
                        <Switch>
                            <Route exact path="/" component={Main}/>
                            <Route path="/main" component={Main}/>
                            <Route path="/about" component={About}/>
                        </Switch>
                    </Container>

                </Router>
            </div>
        );
    }
}

NavBar.propTypes = {};

export default NavBar;
