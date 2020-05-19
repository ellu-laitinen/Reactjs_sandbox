import React, { useState } from "react";
import { Link } from "react-router-dom";


import "./PostCard.css";
import LikeButton from './LikeButton'

/* import Button from 'react-bootstrap/Button' */
import Card from 'react-bootstrap/Card'


const PostCard = ({ title, img, desc, shortDesc, link, remove }) => {
    const [counter, setCounter] = useState(0)
    const addHandler = () => {
        setCounter(counter + 1)
    }

    return (
        <Card className="postCard">
            <Card.Img variant="top" src={img} alt={title} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{shortDesc}...</Card.Text>
                <Card.Text>{desc}</Card.Text>
                <div className="buttons">
                    <Link to={link} variant="link" className="btn-link">Read more...</Link>
                    <p className="btn-remove" onClick={remove}>Remove</p>
                    <LikeButton click={addHandler} text="Like" counter={counter}>
                    </LikeButton>
                </div>

            </Card.Body>
        </Card>
    );
};

export default PostCard;