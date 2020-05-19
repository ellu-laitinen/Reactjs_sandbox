import React, { useState } from "react";
import "./NewPost.css";
import axios from 'axios'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'


const NewPost = () => {
    const [newPost, setNewPost] = useState({
        title: '',
        desc: '',
        img: ''
    })

    const changeValueHandler = (e) => {
        setNewPost({
            ...newPost,
            [e.target.name]: e.target.value,
        })
    }

    const addPostHandler = (e) => {
        e.preventDefault()

        axios.post("http://localhost:3001/posts", newPost).then((response) => {
            console.log(response.data)
        })

    }

    return (
        <>
            <Container fluid className="form">
                <h1>Add new post</h1>
                <Form >

                    <Form.Label htmlFor="title">Title</Form.Label>
                    <Form.Control type="text" name="title" id="title" className="input"
                        onChange={changeValueHandler} />

                    <Form.Label htmlFor="shortDesc">Short description</Form.Label>
                    <Form.Control as="textarea" rows="1" type="text" name="shortDesc" id="shortDesc" className="input"
                        onChange={changeValueHandler} />

                    <Form.Label htmlFor="desc">Description</Form.Label>
                    <Form.Control as="textarea" rows="8" type="text" name="desc" id="desc" className="input"
                        onChange={changeValueHandler} />

                    <Form.Label htmlFor="img">Image URL</Form.Label>
                    <Form.Control type="text" name="img" id="img" className="input"
                        onChange={changeValueHandler} />

                    <Button className="btn-np" variant="dark" type="submit" /* onClick={addPostHandler} */>Add new post</Button>
                </Form>
            </Container>
        </>
    );
};

export default NewPost;
