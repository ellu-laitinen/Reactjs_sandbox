import React from 'react';
import NavMain from '../Nav/Nav'
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar'

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Collapse>
            <Link to="/" style={{ color: "white" }}>Elisabet Laitinen</Link>
            <NavMain />
            </Navbar.Collapse>
        </Navbar>
        
    );
};

export default Header;