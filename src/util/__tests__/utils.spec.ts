import { duplicateUniqueList } from "../utils";

describe("util tests", () => {
  describe("duplicateUniqueList", () => {
    it("should return a list with double size", () => {
      const result1 = duplicateUniqueList(["a", "b"]);
      expect(result1.length).toEqual(4);

      const result2 = duplicateUniqueList([1, 2]);
      expect(result2.length).toEqual(4);
    });

    it("should duplicate values of list", () => {
      const result1 = duplicateUniqueList(["a", "b", "c"]);
      expect(result1).toEqual(["a", "b", "c", "a", "b", "c"]);

      const result2 = duplicateUniqueList([1, "a", "🥺"]);
      expect(result2).toEqual([1, "a", "🥺", 1, "a", "🥺"]);
    });

    it("should clean remove duplicated values", () => {
      const result = duplicateUniqueList(["a", "a"]);
      expect(result).toEqual(["a", "a"]);
    });
  });
});
