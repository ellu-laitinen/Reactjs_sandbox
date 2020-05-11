import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'



const Post = () => {
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
        postData = <h1>Loading post</h1>;
    }
    if (loadedPost) {
        postData = (
            <div className="fullPost">
                <h1>Post {loadedPost.id}</h1>
                <p>{loadedPost.title}</p>
                <img src={loadedPost.img} alt={loadedPost.title} />
            </div>

        );
    }
    return postData;

};
export default Post;