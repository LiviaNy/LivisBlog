import { commentsService } from "../../src/services/commentsService";
import { Comments } from "../../src/models/commentsModels";
import {
  mockHospitalComment,
  mockNurseryComment,
  mockRoomComment,
} from "../mockFactory";

jest.mock("../../src/models/commentsModels");

const mockComments = [
  mockHospitalComment(1, "valami title", "valami content", 1),
  mockHospitalComment(2, "valami title", "valami content", 1),
  mockHospitalComment(3, "valami title", "valami content", 1),
  mockRoomComment(1, "valami title", "valami content", 1),
  mockNurseryComment(1, "valami title", "valami content", 1),
  mockNurseryComment(2, "valami title", "valami content", 1),
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

      const result = await commentsService.getAllComments(1);

      expect(result).not.toBeNull();
      expect(Array.isArray(result.comments)).toBeTruthy();
    });
  });
});
