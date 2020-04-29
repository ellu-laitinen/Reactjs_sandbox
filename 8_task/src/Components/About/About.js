import React from 'react';
/* import './About.css'; */
import Image from 'react-bootstrap/Image'

import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams } from 'react-router-dom';

const About = () => {
    return (
        
       <Row >          
        <Col >
         <Image width= "350" className="abt-img" src="https://source.unsplash.com/7Ym9rpYtSdA" rounded/>
         </Col>  
         <Col >
          <h1>About me</h1>
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
       </p>
       </Col>     
       </Row>
       
    );
};

export default About;