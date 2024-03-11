import { duplicateUniqueList } from "../utils";

describe("util tests", () => {
  describe("duplicateUniqueList", () => {
    it("should return a list with double size", () => {
      const result = duplicateUniqueList(["a", "b"]);
      expect(result.length).toEqual(4);
    });

    it("should duplicate values of list", () => {
      const result1 = duplicateUniqueList(["a", "b", "c"]);
      expect(result1).toEqual(["a", "b", "c", "a", "b", "c"]);
    });

    it("should clean remove duplicated values", () => {
      const result = duplicateUniqueList(["a", "a"]);
      expect(result).toEqual(["a", "a"]);
    });
  });
});
