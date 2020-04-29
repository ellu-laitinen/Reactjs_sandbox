import React from 'react';
/* import './Header.css'; */
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams } from 'react-router-dom';

const Header = () => {
    return (
        
        <Navbar bg="light" collapseOnSelect="true" sticky="top">
            <Navbar.Brand>Elisabet Laitinen</Navbar.Brand>
            <Navbar.Collapse className="justify-content-end">
       
            
      
       
        <Nav justify variant="pills">
                          
                <Nav.Link>
                    <Link className="links" to="/">Home</Link>
                </Nav.Link>
                <Nav.Link>
                    <Link className="links" to="/about">About</Link>
                </Nav.Link>
                <Nav.Link>
                    <Link className="links" to="/blog">Blog</Link>
                </Nav.Link>
            
        </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
};

export default Header;