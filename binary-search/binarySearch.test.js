const binarySearch = require("./binarySearch");

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
  });
});
