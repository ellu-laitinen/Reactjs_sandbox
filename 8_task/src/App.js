import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './Components/Header/Header.js';
import Home from './Components/Home/Home.js';
import About from './Components/About/About.js';
import Blog from './Components/Blog/Blog.js';
import Form from './Components/Form/Form.js';

const App = () => {
    return (
        <Router>
          <Header />
        <div>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about" component={About} />
                <Route path="/blog" component={Blog} />
                <Route path="/form" component={Form}/>
            </Switch>
        </div>
        </Router>
    
    );
};

export default App;