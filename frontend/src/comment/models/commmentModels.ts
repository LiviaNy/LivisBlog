export interface Comment {
  id: number;
  type: string;
  title: string;
  content: string;
}

export interface CommentList {
  commenst: Comment[];
}

export interface commentApiResponse {
  comments: Comment[];
}
