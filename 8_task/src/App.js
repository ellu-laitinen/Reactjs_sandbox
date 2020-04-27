import React from 'react';
import './App.css'
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams } from 'react-router-dom';

import Header from './Components/Header/Header.js';
import Home from './Components/Home/Home.js';
import About from './Components/About/About.js';
import Blog from './Components/Blog/Blog.js';


/* const Topic =() => {
    let {CourseId} = useParams();
    return (
        <h1>
            This is a page for {CourseId}
        </h1>
    );
}; */
const App = () => {
    return (
        <Router>
          <Header />
        <main>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about" component={About} />
                <Route path="/blog" component={Blog} />
            </Switch>
        </main>
        </Router>
    );
};

export default App;