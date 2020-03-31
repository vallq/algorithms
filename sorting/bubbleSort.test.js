const { bubbleSort, recursiveBubbleSort } = require("./bubbleSort");

describe("bubbleSort", () => {
  describe("iterative", () => {
    it("should return empty array if array is empty", () => {
      expect(bubbleSort([])).toEqual([]);
    });
    it("should return already sorted array if array is already sorted", () => {
      expect(bubbleSort([1, 3, 5, 10])).toEqual([1, 3, 5, 10]);
    });
    it("should return sorted array if array is not sorted", () => {
      expect(bubbleSort([1, 10, 3, 5])).toEqual([1, 3, 5, 10]);
    });
    it("should return sorted array if array is reversely sorted", () => {
      expect(bubbleSort([10, 5, 3, 1])).toEqual([1, 3, 5, 10]);
    });
    it("should return sorted array if array is not sorted with negative numbers", () => {
      expect(bubbleSort([1, -10, 3, 5])).toEqual([-10, 1, 3, 5]);
    });
  });
  
  describe("recursive", () => {
    it("should return empty array if array is empty", () => {
      expect(recursiveBubbleSort([], 0)).toEqual([]);
    });
    it("should return already sorted array if array is already sorted", () => {
      expect(recursiveBubbleSort([1, 3, 5, 10], 4)).toEqual([1, 3, 5, 10]);
    });
    it("should return sorted array if array is not sorted", () => {
      expect(recursiveBubbleSort([1, 10, 3, 5], 4)).toEqual([1, 3, 5, 10]);
    });
    it("should return sorted array if array is reversely sorted", () => {
      expect(recursiveBubbleSort([10, 5, 3, 1], 4)).toEqual([1, 3, 5, 10]);
    });
    it("should return sorted array if array is not sorted with negative numbers", () => {
      expect(recursiveBubbleSort([1, -10, 3, 5], 4)).toEqual([-10, 1, 3, 5]);
    });
  })
});

