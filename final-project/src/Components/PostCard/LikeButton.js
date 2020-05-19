import React from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons"



const LikeButton = ({ click, text, likes, counter }) => {
    return (
        <div>
            <button className="like-btn" onClick={click}>{text}  {likes} <FontAwesomeIcon icon={faHeart} className="icon-heart" /> {counter}</button>
        </div>
    )
}

export default LikeButton;
