import { CommentParams, commentTypes } from "../src/models/commentsModels";

export interface MockParams {
  userId: number;
  title: string;
  content: string;
  commentId: number;
}

export interface MockCommentParams {
  userId: number;
  type: commentTypes;
  title: string;
  content: string;
  commentId: number;
}

const mockComment = ({
  commentId,
  type,
  title,
  content,
  userId,
}: MockCommentParams): CommentParams => ({
  id: commentId,
  type,
  title,
  content,
  userid: userId,
});

export const mockHospitalComment = ({
  commentId: id,
  title,
  content,
  userId,
}: MockParams): CommentParams =>
  mockComment({
    commentId: id,
    type: commentTypes.hospital,
    title,
    content,
    userId,
  });

export const mockRoomComment = ({
  commentId: id,
  title,
  content,
  userId,
}: MockParams): CommentParams =>
  mockComment({
    commentId: id,
    type: commentTypes.room,
    title,
    content,
    userId,
  });

export const mockNurseryComment = ({
  commentId: id,
  title,
  content,
  userId,
}: MockParams): CommentParams =>
  mockComment({
    commentId: id,
    type: commentTypes.nursery,
    title,
    content,
    userId,
  });
