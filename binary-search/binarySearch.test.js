const { binarySearch, recursiveBinarySearch } = require("./binarySearch");

describe("binarySearch", () => {
  describe("binary search by sorted id", () => {
    const data = [
      {
        id: 1,
        name: "Alice"
      },
      {
        id: 7,
        name: "Bob"
      },
      {
        id: 11,
        name: "Charlie"
      }
    ];
    it("returns the element found", () => {
      expect(binarySearch(data, data[1].id)).toEqual(data[1]);
    });

    it("returns the last element in the array", () => {
      expect(binarySearch(data, data[data.length - 1].id)).toEqual(
        data[data.length - 1]
      );
    });

    it("returns the first element in the array", () => {
      expect(binarySearch(data, data[0].id)).toEqual(data[0]);
    });
  });

  describe("recursiveBinarySearch", () => {
    const data = [
      {
        id: 1,
        name: "Alice"
      },
      {
        id: 7,
        name: "Bob"
      },
      {
        id: 11,
        name: "Charlie"
      }
    ];
    it("returns the element found", () => {
      expect(
        recursiveBinarySearch(data, data[1].id, 0, data.length - 1)
      ).toEqual(data[1]);
    });
  });
});
