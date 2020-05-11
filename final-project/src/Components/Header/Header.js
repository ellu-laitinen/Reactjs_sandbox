import React from 'react';
import Navigation from '../Navigation/Navigation'
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Collapse>
                <Link to="/" style={{ color: "white" }}>Elisabet Laitinen</Link>
                <Navigation />
            </Navbar.Collapse>
        </Navbar>

    );
};

export default Header;