import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

import Header from "./common/components/Header";
import LoginPage from "./users/pages/login/Login";
import RegisterPage from "./users/pages/register/Register";
import BlogPage from "./blog/pages/blogPage";
import { backgroundImageUrl } from "./common/setings";
import CreateComment from "./comment/pages/CreateComment";
import ManageComments from "./comment/components/ManageComments";

import "./App.scss";

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
            <Route path="/modify">
              <ManageComments />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
