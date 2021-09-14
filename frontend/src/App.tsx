import Header from "./common/components/header";
import { Router, Route, Switch } from "react-router-dom";

import "./App.scss";
import LoginPage from "./users/pages/login/login";
import RegisterPage from "./users/pages/register/register";
import BlogPage from "./blog/pages/blogPage";
import { backgroundImageUrl } from "./common/setings";
import { useHistory } from "react-router";
import { createBrowserHistory } from "history";
import CreateComment from "./comment/pages/createComment";

export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <div
        className="App"
        style={{
          background: `url(${backgroundImageUrl}) repeat center center fixed`,
        }}
      >
        <header className="App-header">
          <Header />
        </header>
        <div className="main-page">
          <Switch>
            <Route path="/login">
              <LoginPage />
            </Route>
            <Route path="/register">
              <RegisterPage />
            </Route>
            <Route path="/blog">
              <BlogPage />
            </Route>
            <Route path="/comment">
              <CreateComment />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
