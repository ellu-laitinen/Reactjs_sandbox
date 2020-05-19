import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./FullPost.css";
/* import axios from 'axios';*/

import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

import Image from 'react-bootstrap/Image' 
import posts from '../../postdata'


const FullPost = () => {
    /* const [loadedPost, setLoadedpost] = useState(); */
    let { postId } = useParams();

    
  const post =  posts.find((p) => p.id == postId);


    return /* postData */ (

        <Container>
                    <Col className="fullPost">
                        <h1>Post {post.id}</h1>
                        <p>{post.title}</p>
                        <p>{post.desc}</p>
                        <Image className="post-image" src={post.img} alt={post.title} fluid />
                    </Col>
                    <Button className="button-fp" variant="primary" size="smd">
                        <Link to="/blog"> Back to blog</Link>
                    </Button>
                </Container>

    
    );
};
export default FullPost;

    /*     useEffect(() => {
            if (!loadedPost) {
                axios.get('http://localhost:3001/posts/' + postId).then(
                    (response) => {
                        console.log(response.data);
                        setLoadedpost(response.data);
                    });
            }
        }); */
    /* 
        let postData = undefined;
        if (postId) {
            postData = <h1>Loading post</h1>
        }
        if (loadedPost) {
            postData = (
    
                <Container>
                    <Col className="fullPost">
                        <h1>Post {loadedPost.id}</h1>
                        <p>{loadedPost.title}</p>
                        <p>{loadedPost.desc}</p>
                        <Image className="post-image" src={loadedPost.img} alt={loadedPost.title} fluid />
                    </Col>
                    <Button className="button-fp" variant="primary" size="smd">
                        <Link to="/blog"> Back to blog</Link>
                    </Button>
                </Container>
    
            );
        } */


/*         <div>
        <h2>{post.title}</h2>
        <h2>{post.author}</h2>
        <p>{post.desc}</p>
        <img src={post.img} alt={post.title} />


    </div> */