import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from './Components/Header/Header'
import Home from "./Components/Home/Home";
import Blog from "./Components/Blog/Blog";
import NewPost from "./Components/NewPost/NewPost";
import Comic from "./Components/Comic/Comic"

const App = () => {
  return (
    <Router>
      <Header />
      <div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/blog" component={Blog} />
          <Route path="/newpost" component={NewPost} />
          <Route path="/comic" component={Comic} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
