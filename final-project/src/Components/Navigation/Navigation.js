import React from "react";
import Nav from 'react-bootstrap/Nav'
import './Navigation.css'

const Navigation = () => {
    return (
        <Nav className="justify-content-end" style={{ width: "85%" }}>
            <Nav.Item>
                <Nav.Link href="/" exact style={{ color: "white" }}>
                    Home
                    </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/blog" style={{ color: "white" }}>
                    Blog
                    </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/newpost" style={{ color: "white" }}>
                    New post
                    </Nav.Link>
            </Nav.Item>
        </Nav>
    );
};

export default Navigation;
