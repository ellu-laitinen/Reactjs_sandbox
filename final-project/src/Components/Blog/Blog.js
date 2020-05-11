import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Switch, Route, useRouteMatch } from "react-router-dom";
import './Blog.css'

import PostCard from "../PostCard/PostCard";
import FullPost from "../FullPost/FullPost";

import Container from 'react-bootstrap/Container'

const Blog = () => {
    const [post, setPost] = useState([]);
    let match = useRouteMatch();

    useEffect(() => {
        axios.get("http://localhost:3001/posts").then((response) => {
            const posts = response.data.slice(0, 10)
            setPost(posts);
            console.log(posts)
        });
    }, [])

    const removeHandler = (id) => {
        console.log(id)

        axios.delete("http://localhost:3001/posts/" + id)
            .then(() => {
                return axios.get("http://localhost:3001/posts/")
            })
            .then(response => {
                setPost(response.data)
            })
    }

    const PostList = post.map((p) => {
        return (
            <PostCard
                key={p.id}
                title={p.title}
                shortDesc={p.shortDesc}
                img={p.img}
                link={`${match.url}/${p.id}`}
                remove={() => removeHandler(p.id)}
            />
        );
    });

    return (
        <>
            <Switch>
                <Route path="/blog/:postId">
                    <FullPost />
                </Route>
                <Route path={match.path}>
                    <Container fluid >
                        <div>
                            <h1 className="blog-title">Blog</h1>
                            <div className="blog">
                                {PostList}
                            </div>
                        </div>
                    </Container>
                </Route>
            </Switch>
        </>
    );
};

export default Blog;
