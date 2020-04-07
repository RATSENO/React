import React from "react";
import { Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Profile from "./Profile";

const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/profile/velopert">velopert 프로필</Link>
        </li>
        <li>
          <Link to="/profile/gildong">gildong 프로필</Link>
        </li>
      </ul>
      <Route path="/" component={Home} exact={true}></Route>
      <Route path="/about" component={About}></Route>
      <Route path="/profile/:username" component={Profile}></Route>
    </div>
  );
};

export default App;
