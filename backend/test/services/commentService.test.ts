jest.mock("../../src/models/commentsModels");
import { Comments, commentTypes } from "../../src/models/commentsModels";
import { commentsService } from "../../src/services/commentsService";
import {
  mockHospitalComment,
  mockNurseryComment,
  mockRoomComment,
} from "../mockFactory";

const mockDb = [
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

Comments.getById = jest.fn(({ commentId, type }) => Promise.resolve(mockDb));

describe("comment service unit tests", () => {
  describe("get comment by id", () => {
    const mockToken = {
      commentId: 1,
      type: commentTypes.hospital,
      userId: 1,
    };
    it("should return building with given id", async () => {
      expect(await commentsService.getCommentById(mockToken)).toStrictEqual(
        mockDb[0]
      );
    });
  });
});
