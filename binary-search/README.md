## Binary Search

Implement naive and recursive solutions for a simple binary search algorithm.

Following is the sample data and 1 test case:

```j
const data = [
  {
    id: 1,
    name: 'Alice',
  },
  {
    id: 7,
    name: 'Bob',
  },
  {
    id: 11,
    name: 'Charlie',
  },
];

describe('binary search by sorted id', () => {
  it('returns the element found', () => {
    expect(binarySearch(data, data[1].id)).toEqual(data[1]);
  });
```
