import { useEffect } from "react";
import { useDispatch } from "react-redux";
import jwt from "jsonwebtoken";
import { userActions } from "../../users/actions/userAction";
import { User } from "../../users/models/userModels";
import { Route, Switch } from "react-router-dom";
import { blogPath } from "../../common/setings";
import BlogMenu from "../components/blogMenu";
import "./blogPage.scss";

type Token = User;

const BlogPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const token: string = localStorage.getItem("token") || "";
    if (!token) return;
    const tokenData: Token = jwt.decode(token) as unknown as Token;
    dispatch(
      userActions.login({
        userId: tokenData.userId,
        username: tokenData.username,
      })
    );
  }, []);

  return (
    <div className="blog-page">
      <div className="blog-menu">
        <BlogMenu />
      </div>
      <div className="blog-content">
        <p>"Plese press on a menu item"</p>
      </div>
      <div className="subpages">
        <Switch>
          <Route path={blogPath + "/hospital"}></Route>
          <Route path={blogPath + "/room"}></Route>
          <Route path={blogPath + "/nursery"}></Route>
        </Switch>
      </div>
    </div>
  );
};

export default BlogPage;
