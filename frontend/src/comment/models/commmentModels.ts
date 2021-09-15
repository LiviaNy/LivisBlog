export interface Comment {
  id: number;
  type: typeOfComment;
  title: string;
  content: string;
}

export interface CommentList {
  commenst: Comment[];
}

export interface commentApiResponse {
  comments: Comment[];
}

export type typeOfComment = "hospital" | "room" | "nursery";
