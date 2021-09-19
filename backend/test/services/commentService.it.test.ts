import { commentsService } from "../../src/services/commentsService";
import { Comments, commentTypes } from "../../src/models/commentsModels";
import {
  mockHospitalComment,
  mockNurseryComment,
  mockRoomComment,
} from "../mockFactory";

jest.mock("../../src/models/commentsModels");

const mockComments = [
  mockHospitalComment({
    commentId: 1,
    title: "valami title",
    content: "valami content",
    userId: 1,
  }),
  mockHospitalComment({
    commentId: 2,
    title: "valami title",
    content: "valami content",
    userId: 1,
  }),
  mockHospitalComment({
    commentId: 3,
    title: "valami title",
    content: "valami content",
    userId: 1,
  }),
  mockRoomComment({
    commentId: 1,
    title: "valami title",
    content: "valami content",
    userId: 1,
  }),
  mockNurseryComment({
    commentId: 1,
    title: "valami title",
    content: "valami content",
    userId: 1,
  }),
  mockNurseryComment({
    commentId: 2,
    title: "valami title",
    content: "valami content",
    userId: 1,
  }),
];

describe("comment service IT tests", () => {
  describe("getAllComments", () => {
    it("returns a comment list", async () => {
      Comments.getCommentsFromHospital = jest.fn(() =>
        Promise.resolve([mockComments[0], mockComments[1], mockComments[2]])
      );
      Comments.getCommentsFromRoom = jest.fn(() =>
        Promise.resolve([mockComments[3]])
      );
      Comments.getCommentsFromNursery = jest.fn(() =>
        Promise.resolve([mockComments[4], mockComments[5]])
      );

      const result = await commentsService.getAllComments();

      expect(result).not.toBeNull();
      expect(Array.isArray(result.comments)).toBeTruthy();
    });
  });

  describe("post new comment", () => {
    it("returns the new comments data", async () => {
      Comments.create = jest.fn(() =>
        Promise.resolve({ results: { insertId: 1 }, fields: [] })
      );

      const result = await commentsService.createComment({
        userId: 1,
        type: commentTypes.room,
        title: "valami title",
        content: "valami content",
      });

      expect(result).not.toBeUndefined();
      expect(result.id).toBe(1);
    });
  });

  describe("modify comment", () => {
    it("returns the data of modified comment", async () => {
      Comments.modifyContent = jest.fn(() =>
        Promise.resolve({ results: { insertId: 1 }, fields: [] })
      );

      const result = await commentsService.modifyComment({
        type: commentTypes.nursery,
        title: "valami title",
        newContent: "valami content",
        commentId: 1,
      });

      expect(result).not.toBeNull();
      expect(result.type).toBe(commentTypes.nursery);
    });
  });
});
