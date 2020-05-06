import React from 'react';
import Image from 'react-bootstrap/Image'

import Container from 'react-bootstrap/Container' 
import Col from 'react-bootstrap/Col' 
import Row from 'react-bootstrap/Row'
import 'bootstrap/dist/css/bootstrap.min.css';

const About = () => {
    return (
       <div>
          <Container fluid>
             <Row className="justify-content-space-around" style={{margin: 20, padding: 20}}>   
                <Col lg={true} xs={12} md={8}>            
          <Image src="https://source.unsplash.com/7Ym9rpYtSdA" alt="" style={{width: 400}} rounded fluid/>  
          </Col> 
          <Col lg={true} xs={12} md={8}>   
          <h1>About me</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          </Col>   
            </Row>
          </Container>
       </div>
        
       
    );
};

export default About;