import React from 'react';
import { Switch, Route, Link, useRouteMatch } from 'react-router-dom';
/* import Post from '../Post/Post.js'; */
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import posts from "../../postdata";
import Post from "../Post/Post";




const Blog = () => {   
    let match = useRouteMatch();
    const post = posts;

const postList = post.map((post) => {
  return (
    <Card style={{ width: '18rem' }}>
    <div key={post.id}>
      <Card.Img variant="top" src={post.img} alt={post.title}/>
      <Card.Body>
        <Card.Title>{post.title}</Card.Title>
        <Card.Text><p>{post.desc}</p></Card.Text>
        <Button variant="primary">
        <Link to={`${match.url}/${post.title}`} style={{color: 'white'}}>Read more</Link>
        </Button>
      </Card.Body>
    </div>
    </Card>
  )
})

       
      return (
        <div>
          <Switch>
            <Route path='/blog/:postId'>
              <Post/>
            </Route>
            <Route path={match.path}>{postList}</Route>
          </Switch>
        </div>
        
 
  
      )
}
    

export default Blog;