import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from './Components/Header/Header'
/* import Navigation from "./Components/Navigation/Navigation"; */
import Home from "./Components/Home/Home";
import Blog from "./Components/Blog/Blog";
import NewPost from "./Components/NewPost/NewPost";

const App = () => {
  return (
    <Router>
      <Header />
      <div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/blog" component={Blog} />
          <Route path="/newpost" component={NewPost} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
