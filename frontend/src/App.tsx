import Header from "./common/components/header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { url } from "inspector";

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
        <div className="main-page"></div>
      </div>
    </Router>
  );
}

export default App;
