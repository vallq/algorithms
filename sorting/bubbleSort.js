const bubbleSort = array => {
  if (array === []) {
    return array;
  } else {
    let temp;
    for (let i = 0; i < array.length; i++) {
      let sorted = false;
      for (let j = 1; j < array.length - i; j++) {
        if (array[j - 1] > array[j]) {
          temp = array[j - 1];
          array[j - 1] = array[j];
          array[j] = temp;
          sorted = true;
        }
      }
      if (!sorted) {
        return array;
      }
    }
    return array;
  }
};

const recursiveBubbleSort = (array, arrayLength) => {
  let sorted = false;
  
  if (array.length === 1 || array.length === 0) {
    return array;
  }

  for (let j = 1; j < arrayLength; j++) {
    if (array[j - 1] > array[j]) {
      temp = array[j - 1];
      array[j - 1] = array[j];
      array[j] = temp;
      sorted = true;
    }
  }

  if (!sorted) {
    return array;
  } else {
    recursiveBubbleSort(array, arrayLength - 1);
  }
};

module.exports = { bubbleSort, recursiveBubbleSort };
