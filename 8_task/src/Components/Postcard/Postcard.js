import React from "react";

import { Link } from "react-router-dom";

const Postcard = ({ title, img, desc, link, author }) => {
    return (
        <div>
            <h2>{title}</h2>
            <h2>{author}</h2>
            <p>{desc}</p>
            <img src={img} alt={title} />
            <Link to={link}>Read more</Link>

        </div>
    );
};

export default Postcard;
