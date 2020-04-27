import React from 'react';
import './Header.css';
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams } from 'react-router-dom';

const Header = () => {
    return (
        
        <div className="nav">
            <div>
        <h2>Elisabet Laitinen</h2>
        </div>
        <nav>
            <ul>                  
                <li>
                    <Link className="links" to="/">Home</Link>
                </li>
                <li>
                    <Link className="links" to="/about">About</Link>
                </li>
                <li>
                    <Link className="links" to="/blog">Blog</Link>
                </li>
            </ul>
        </nav>
      </div>
    );
};

export default Header;