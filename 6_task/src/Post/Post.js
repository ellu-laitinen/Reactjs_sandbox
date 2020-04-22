import React from 'react';
import './Post.css';

const Post = props => {   
        return (  
            <div className="card">
                <img src={props.img} alt={props.title}/>
                <h2>{props.title}</h2>
                <h3>{props.author}</h3>
                <p>{props.desc}</p> 
               {/*  <button onClick={props.likeclick}>Like</button>
                <h3>Total likes: {props.likes}</h3> */}
                 <button onClick={props.closeclick}>Close</button>
                </div>
        
        );
    }

export default Post;