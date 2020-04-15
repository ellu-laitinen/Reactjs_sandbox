import React, { Component } from 'react';
import './Post.css';

const Post = props => {   
        return (  
            <div className="card">
                <img src={props.img} alt={props.title}/>
                <h2>{props.title}</h2>
                <p>{props.author}</p>
                <p>{props.desc}</p>
                
            </div>
        
        );
    }

export default Post;
