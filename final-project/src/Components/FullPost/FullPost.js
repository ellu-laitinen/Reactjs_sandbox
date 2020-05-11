import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./FullPost.css";
import axios from 'axios';

import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Image from 'react-bootstrap/Image'

//npx json-server --port 3001 --watch db.json


const FullPost = () => {
    const [loadedPost, setLoadedpost] = useState();
    let { postId } = useParams();
    useEffect(() => {
        if (!loadedPost) {
            axios.get('http://localhost:3001/posts/' + postId).then(
                (response) => {
                    console.log(response.data);
                    setLoadedpost(response.data);
                });
        }
    });

    let postData = undefined;
    if (postId) {
        postData = <h1>Loading post</h1>
    }
    if (loadedPost) {
        postData = (
            <Jumbotron fluid>
                <Container>
                    <Col className="fullPost">
                        <h1>Post {loadedPost.id}</h1>
                        <p>{loadedPost.title}</p>
                        <p>{loadedPost.desc}</p>
                        <Image className="image" src={loadedPost.img} alt={loadedPost.title} fluid />
                    </Col>
                    <Button className="button-fp" variant="primary" size="smd">
                        <Link to="/blog"> Back to blog</Link>
                    </Button>
                </Container>
            </Jumbotron>
        );
    }
    return postData;
};
export default FullPost;
