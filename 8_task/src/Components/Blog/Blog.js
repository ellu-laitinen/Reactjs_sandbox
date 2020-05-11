import React, { useState, useEffect } from 'react';
import { Switch, Route, Link, useRouteMatch } from 'react-router-dom';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import Post from "../Post/Post";
import Postcard from "../Postcard/Postcard";

const Blog = () => {
  const [post, setPost] = useState([])
  let match = useRouteMatch();

  useEffect(() => {
    axios.get("http://localhost:3001/posts").then((response) => {
      const posts = response.data.slice(0, 10);
      setPost(posts)
      console.log(posts)
    })
  }, [])

  const postList = post.map((p) => {
    return (
      <Postcard
        key={p.id}
        title={p.title}
        desc={p.desc}
        img={p.img}
        link={`${match.url}/${p.id}`}

      />
    );
  });

  return (
    <>
      <Switch>
        <Route path='/blog/:postId'>
          <Post />
        </Route>
        <Route path={match.path}>
          <div>
            <h1>Blog</h1>
            {postList}
          </div>
        </Route>
      </Switch>
    </>

  )
}

export default Blog;