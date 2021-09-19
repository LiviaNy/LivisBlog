import { Comments, commentTypes } from "../../src/models/commentsModels";
import { db } from "../../src/db/connection";
import { hostname } from "os";
import HttpException from "../../src/exceptions/httpException";

jest.mock("../../src/db/connection");

describe("Comment model unit testing", () => {
  describe("comment getCommentById unit testing", () => {
    it("Throws error when there is no result", async () => {
      jest.spyOn(db, "query").mockResolvedValue({ results: [] });
      try {
        await Comments.getById({ commentId: 1, type: commentTypes.hospital });
      } catch (error:any) {
        expect(error.errorMessage.message).toEqual("Comment not found.");
      }
    });
    it("Returns result object when query returns comment", async () => {
      const comment = {
        id: 1,
        title: "Valami",
        content: "Valami content",
        userid: 1,
      };
      const mockDbResult = { results: [comment] };
      jest.spyOn(db, "query").mockResolvedValue(mockDbResult);
      const result = await Comments.getById({
        commentId: 1,
        type: commentTypes.hospital,
      });

      expect(result).not.toBeUndefined();
      expect.objectContaining(mockDbResult);
    });
  });

    describe("modify comment unit testing", () => {
      it("Throws error when there is no result", async () => {
        jest.spyOn(db, "query").mockResolvedValue({ results: [] });
        try {
          await Comments.modifyContent({type:commentTypes.hospital, title:"new title", newContent:"nre content", commentId:1})
        } catch (error:any) {
          expect(error.errorMessage.message).toEqual("Comment not found.");
        }
      });
      it("Returns result", async () => {
        const mockDbResult = { results: [] };
        jest.spyOn(db, "query").mockResolvedValue(mockDbResult);
        const result = await Comments.modifyContent({type:commentTypes.hospital, title:"new title", newContent:"nre content", commentId:1})

        expect(result).not.toBeUndefined();
      });
    });
});
