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

export type typeOfComment = "hospital" | "room" | "nursery";

export interface commentApiResDelete {
  status: "successful";
}
