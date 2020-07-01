import React from "react";
import Nav from 'react-bootstrap/Nav'
import './Navigation.css'
import { LinkContainer } from 'react-router-bootstrap'

const Navigation = () => {
    return (
        <Nav className="justify-content-end" style={{ width: "85%" }}>
            <Nav.Item>
                <LinkContainer className="nav-link" to="/" exact style={{ color: "white" }}>
                    <Nav.Link>Home</Nav.Link>
                </LinkContainer>
            </Nav.Item>
            <Nav.Item>
                <LinkContainer to="/blog" style={{ color: "white" }}>
                    <Nav.Link> Blog</Nav.Link>
                </LinkContainer>
            </Nav.Item>
            <Nav.Item>
                <LinkContainer to="/newpost" style={{ color: "white" }}>
                    <Nav.Link>New post</Nav.Link>
                </LinkContainer>
            </Nav.Item>
            <Nav.Item>
                <LinkContainer to="/comic" style={{ color: "white" }}>
                    <Nav.Link>Comic</Nav.Link>
                </LinkContainer>
            </Nav.Item>
        </Nav>
    );
};

export default Navigation;
