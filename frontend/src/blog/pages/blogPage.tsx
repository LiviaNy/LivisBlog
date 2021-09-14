import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import jwt from "jsonwebtoken";
import { userActions } from "../../users/actions/userAction";
import { User } from "../../users/models/userModels";
import { Route, Switch } from "react-router-dom";
import { blogPath } from "../../common/setings";
import BlogMenu from "../components/blogMenu";
import "./blogPage.scss";
import HospitalPage from "./HospitalPage";
import RoomPage from "./RoomPage";
import NurseryPage from "./NurseryPage";


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
        <div className="subpages">
          <Switch>
            <Route path={blogPath + "/hospital"}>
              <HospitalPage />
            </Route>
            <Route path={blogPath + "/room"}>
              <RoomPage />
            </Route>
            <Route path={blogPath + "/nursery"}>
              <NurseryPage />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
