import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import jwt from "jsonwebtoken";
import { Route, Switch } from "react-router-dom";

import { userActions } from "../../users/actions/userAction";
import { User } from "../../users/models/userModels";
import { blogPath } from "../../common/setings";
import BlogMenu from "../components/BlogMenu";
import HospitalPage from "./HospitalPage";
import RoomPage from "./RoomPage";
import NurseryPage from "./NurseryPage";
import { get } from "../../common/services/apiService";
import {
  Comment,
  commentApiResponse,
  Types,
} from "../../comment/models/commmentModels";
import { store } from "../../store";
import { BlogPageProps } from "../models/blogMenuModel";

import "./blogPage.scss";

type Token = User;

const BlogPage:FC<BlogPageProps> = () => {
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

    async function getCommentsArray(): Promise<Comment[] | undefined> {
      try {
        const fetchedComments: Comment[] =
          (
            (await get("/comment", false))
              .parsedBody as unknown as commentApiResponse
          ).comments || [];
        store.dispatch({
          type: Types.FETCH_COMMENT_LIST,
          payload: { comments: fetchedComments },
        });
        return fetchedComments;
      } catch (error: any) {
        console.log("No data received");
      }
    }
    getCommentsArray();
  }, [dispatch]);

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
