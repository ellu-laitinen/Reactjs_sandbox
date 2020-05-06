import React from 'react';
import {Link, useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'

import posts from "../../postdata"


const Post = () => {
    let { postId } = useParams();
    let post = posts.find((p) =>  p.title === postId)

    return (
        <Jumbotron className="bg-transparent jumbotron-fluid p-0">
        <Container fluid={true}>
            <Row className="justify-content-center py-5">
     <Card>
        <Card.Body>
            <Card.Img src={post.img} alt={post.title} style={{width: 500 }}/> 
    <Card.Title>{post.title}</Card.Title>
    <Card.Text>{post.desc}</Card.Text>
        <Link to="/blog">Back to Blog page</Link>
  
       </Card.Body>
       </Card>
       </Row>
       </Container>
       </Jumbotron>
        
    );
}

export default Post;