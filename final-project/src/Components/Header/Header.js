import React from 'react';
import Navigation from '../Navigation/Navigation'
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons"

const Header = () => {
    return (
        <Navbar className="navbar">
            <Navbar.Collapse>
                <Link to="/" style={{ color: "white" }}><FontAwesomeIcon icon={faMusic} className="music-icon" />Elisabet Laitinen </Link>

                <Navigation />
            </Navbar.Collapse>
        </Navbar>

    );
};

export default Header;