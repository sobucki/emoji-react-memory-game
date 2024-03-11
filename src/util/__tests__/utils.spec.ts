import { duplicateUniqueList, shuffle } from "../utils";

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

  describe("shuffle", () => {
    it("should return a same size list", () => {
      const list1 = ["a", "b", "c"];
      const result1 = shuffle(list1);
      expect(result1.length).toEqual(3);
    });

    it("should not modified the source list", () => {
      const list1 = ["a", "b", "c", "d", "e", "f"];
      const result1 = shuffle(list1);
      expect(result1).not.toEqual(list1);
    });

    it("should contain the same elements as the original array", () => {
      const array = [1, 2, 3, 4, 5];
      const shuffledArray = shuffle(array);
      expect(shuffledArray.sort()).toEqual(array.sort());
    });

    it("should shuffle the array elements", () => {
      const array = [1, 2, 3, 4, 5];
      const shuffledArray = shuffle(array);
      expect(shuffledArray).not.toEqual(array);
    });

    it("should handle an empty array", () => {
      const array: number[] = [];
      const shuffledArray = shuffle(array);
      expect(shuffledArray).toEqual([]);
    });

    it("should handle an array with one element", () => {
      const array = [1];
      const shuffledArray = shuffle(array);
      expect(shuffledArray).toEqual([1]);
    });
  });
});
