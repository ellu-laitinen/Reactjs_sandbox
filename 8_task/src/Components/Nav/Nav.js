import React from 'react';
import Nav from 'react-bootstrap/Nav'

const NavMain = () => {
    return (
       <Nav className="justify-content-end" style={{ width: "85%" }}>
           <Nav.Item>
               <Nav.Link href="/" exact>
                       Home
                   </Nav.Link>
                 </Nav.Item>
               <Nav.Item>
                   <Nav.Link href="/about">About</Nav.Link>
                </Nav.Item>              
               <Nav.Item>
                   <Nav.Link href="/blog">Blog</Nav.Link>
               </Nav.Item>
               <Nav.Item>
                   <Nav.Link href="/form">New blog post</Nav.Link>
               </Nav.Item>
         
       </Nav>
    );
}

export default NavMain;
