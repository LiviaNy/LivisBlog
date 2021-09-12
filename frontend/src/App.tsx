import Header from "./common/components/header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.scss";
import LoginPage from "./users/pages/login/login";
import RegisterPage from "./users/pages/register/register";

function App() {
  const backgroundImageUrl =
    process.env.REACT_APP_FRONTEND_BASEURL +
    "/backgrounds/backround-livis-blog.jpg";
  const isUserLoggedIn = localStorage.getItem("token") != null;
  return (
    <Router>
      <div
        className="App"
        style={{
          background: `url(${backgroundImageUrl}) repeat center center fixed`,
        }}
      >
        <header className="App-header">
          <Header isLoggedIn={isUserLoggedIn} />
        </header>
        <div className="main-page">
          <Switch>
            <Route path="/login">
              <LoginPage />
            </Route>
            <Route path="/register">
              <RegisterPage />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
