export type typeOfComment = "hospital" | "room" | "nursery";

export type Action = {
  comments: Comment[];
};

export type CommentState = Action;

export enum Types {
  FETCH_COMMENT_LIST = "FETCH_COMMENT_LIST",
}

export interface Comment {
  id: number;
  type: typeOfComment;
  title: string;
  content: string;
  userid: number;
}

export interface CommentList {
  commenst: Comment[];
}

export interface commentApiResponse {
  comments: Comment[];
}

export interface commentApiResDelete {
  status: "successful";
}

export interface StoreInterface {
  username: string;
  userId: number;
}

export interface CreateCommentProps {}

export interface ManageCommentsProps {}

export interface CommentsProps {
  comments: {
    comments: Comment[];
    isModifier: boolean;
  };
}

export interface ApiCallBody {
  type: string;
  title: string;
  content: string;
}

export interface CommentHolderProps {
  type: string;
}
