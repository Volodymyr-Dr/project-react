import React from "react";
import { Redirect, Route, Switch } from "react-router";
import About from "../../pages/About";
import Posts from "../../pages/Posts";
import Error from "../../pages/Error";
import PostIdPage from "../../pages/PostIdPage";

const AppRouter = () => {
  return (
    <Switch>
      <Route exact path="/project-react/about">
        <About />
      </Route>
      <Route exact path="/project-react/posts">
        <Posts />
      </Route>
      <Route exact path="/project-react/posts/:id">
        <PostIdPage />
      </Route>
      <Route exact path="/project-react/error">
        <Error />
      </Route>
      <Redirect to="/project-react/posts" />
    </Switch>
  );
};

export default AppRouter;
