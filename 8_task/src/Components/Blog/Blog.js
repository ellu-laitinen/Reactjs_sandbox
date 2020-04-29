import React, { Component } from 'react';
/* import './Blog.css'; */
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams } from 'react-router-dom';
/* import Post from '../Post/Post.js'; */
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'




const Post = props => {   
    let { path, url } = useRouteMatch();
    return (     
         <Row md={8}>
           <Col md={8}>
        <Card style={{ width: '18rem' }} >
            <Card.Img variant="bottom"src={props.img} alt={props.title}/>
            <Card.Body>
              <Card.Title>
            {props.title}
            </Card.Title>
            <Card.Text>
              {props.desc}
            </Card.Text>            
             <Button variant='primary'><Link to={props.link}>Read more...</Link></Button>
             </Card.Body>
            </Card>
            </Col>
          </Row>    
          
    );
}

const posts = [
    {
      id:1,
      title: "Post1", 
      desc: "Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm. Pinnace holystone mizzenmast quarter crow's nest nipperkin grog yardarm hempen halter furl.",
      img: "https://source.unsplash.com/RYfZxZwnPas",
      link: "post1"
     
    },
    {
      id:2,
      title: "Post2", 
      desc: "Pinnace holystone mizzenmast quarter crow's nest nipperkin grog yardarm hempen halter furl. Swab barque interloper chantey doubloon starboard grog black jack gangway rutters.",
      img: "https://source.unsplash.com/NbgQfUvKFE0",
      link: "post2"
  
    },
    {
      id:3,
      title: "Post3" ,
      desc: "Swab barque interloper chantey doubloon starboard grog black jack gangway rutters. Pinnace holystone mizzenmast quarter crow's nest nipperkin grog yardarm.",
      img: "https://source.unsplash.com/0FQneB1VjaM",
      link: "post3"
  
    },
    {
      id:3,
      title: "Post4" ,
      desc: "Pinnace holystone mizzenmast quarter crow's nest nipperkin grog yardarm ab barque interloper chantey doubloon starboard grog black jack gangway rutters.",
      img: "https://source.unsplash.com/34NBruWQzoE",
      link: "post4"
  
    }
  
  ];

  class Blog extends Component {
    state = {
      posts: posts,
    
    };
  
    render() {
  
      const postsList = this.state.posts.map((post, index) => {
       
        return (
        
          <Post
          key={post.id}
          title={post.title} 
          desc={post.desc} 
          img={post.img}
          
          link={post.link}
          />     
       
        )
      });
  
      return <div>{postsList}</div>;
    }
  }
/* const Blog = () => {
    let { path, url } = useRouteMatch();
    return (
        <div>
       <h1>Blog</h1>
    <ul>
        <li>
            <Link to={`${url}/post1`}>Post</Link>
        </li>
        <li>
            <Link to={`${url}/UIprototyping`}>UI Prototyping</Link>
        </li>
        <li>
            <Link to={`${url}/reactBasics`}>React Basics</Link>
        </li>
        <li>
            <Link to={`${url}/about`}>About</Link>
        </li>
    </ul>
        <Switch>
        <Route path="/post">
            <Post/>
            </Route>
          
              
           
        </Switch>
    </div>
    );
}; */

export default Blog;