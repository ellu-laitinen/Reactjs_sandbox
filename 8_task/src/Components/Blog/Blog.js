import React, { Component } from 'react';
/* import './Blog.css'; */
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams } from 'react-router-dom';
import Post from '../Post/Post.js';

/* 
const Post = props => {   
    let { path, url } = useRouteMatch();
    return (  
        <div className="card">
            <img className="postimg" src={props.img} alt={props.title}/>
            <h3>{props.title}</h3>
            <h3>{props.author}</h3>
            <p>{props.desc}</p> 
             <button><Link to={props.link}>Read more...</Link></button>
            </div>
    
    );
}

const posts = [
    {
      id:1,
      title: "Post1", 
      desc: "Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm. Pinnace holystone mizzenmast quarter crow's nest nipperkin grog yardarm hempen halter furl.",
      img: "https://source.unsplash.com/RYfZxZwnPas",
      link: "{`${url}/post1`}"
     
    },
    {
      id:2,
      title: "Post2", 
      desc: "Pinnace holystone mizzenmast quarter crow's nest nipperkin grog yardarm hempen halter furl. Swab barque interloper chantey doubloon starboard grog black jack gangway rutters.",
      img: "https://source.unsplash.com/NbgQfUvKFE0",
      link: "{`${url}/post2`}"
  
    },
    {
      id:3,
      title: "Post3" ,
      desc: "Swab barque interloper chantey doubloon starboard grog black jack gangway rutters. Pinnace holystone mizzenmast quarter crow's nest nipperkin grog yardarm.",
      img: "https://source.unsplash.com/0FQneB1VjaM",
      link: "{`${url}/post3`}"
  
    },
    {
      id:3,
      title: "Post4" ,
      desc: "Pinnace holystone mizzenmast quarter crow's nest nipperkin grog yardarm ab barque interloper chantey doubloon starboard grog black jack gangway rutters.",
      img: "https://source.unsplash.com/34NBruWQzoE",
      link: "{`${url}/post4`}"
  
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
  
      return <div className="card-container">{postsList}</div>;
    }
  } */
const Blog = () => {
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
};

export default Blog;