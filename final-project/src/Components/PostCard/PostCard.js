import React from "react";

import "./PostCard.css";

import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

const PostCard = ({ title, img, desc, shortDesc, link, remove }) => {
    return (
        <Card className="postCard">
            <Card.Img variant="top" src={img} alt={title} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{shortDesc}...</Card.Text>
                <Card.Text>{desc}</Card.Text>

                <Button href={link} variant="link" className="btn-link">Read more...</Button>
                <Button variant="danger" size="sm" className="btn-remove" onClick={remove}>Remove</Button>
            </Card.Body>
        </Card>
    );
};

export default PostCard;
