import { commentParams, commentTypes } from "../src/models/commentsModels";

const mockComment = (
  id: number,
  type: commentTypes,
  title: string,
  content: string,
  userId: number
): commentParams => ({
  id,
  type,
  title,
  content,
  userid: userId,
});

export const mockHospitalComment = (
  id: number,
  title: string,
  content: string,
  userId: number
): commentParams =>
  mockComment(id, commentTypes.hospital, title, content, userId);

export const mockRoomComment = (
  id: number,
  title: string,
  content: string,
  userId: number
): commentParams => mockComment(id, commentTypes.room, title, content, userId);

export const mockNurseryComment = (
  id: number,
  title: string,
  content: string,
  userId: number
): commentParams =>
  mockComment(id, commentTypes.nursery, title, content, userId);
