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

function binarySearch(data, id) {
  let lowIndex = 0;
  let highIndex = data.length - 1;
  let middleIndex = 0;

  while (lowIndex <= highIndex) {
    const middleIndex = Math.floor((lowIndex + highIndex) / 2);
    if (id === data[middleIndex].id) {
      return data[middleIndex];
    } else if (id > data[middleIndex].id) {
      lowIndex = middleIndex + 1;
    } else {
      highIndex = middleIndex - 1;
    }
  }
  return null
}

function recursiveBinarySearch(data, id, lowIndex, highIndex) {
  
  //base case: when id is the only element left
  if (lowIndex > highIndex) {
    return null;
  }
  //recursive case: segment the data
  const middleIndex = Math.floor((lowIndex + highIndex) / 2);
    if (id === data[middleIndex].id) {
      return data[middleIndex];
    } else if (id > data[middleIndex].id) {
      lowIndex = middleIndex + 1;
      recursiveBinarySearch(data, id, lowIndex, highIndex);
    } else {
      highIndex = middleIndex - 1;
      recursiveBinarySearch(data, id, lowIndex, highIndex)
    }
}

module.exports = { binarySearch, recursiveBinarySearch };
