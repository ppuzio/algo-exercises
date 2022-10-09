// find the first pair in a sorted array that will sum up to 0
// return undefined if none found
// find_pair([-5, -3, 0, 1, 2, 3, 5]) // [5,5]
// find_pair([-5, -3, 0, 1, 2, 4, 6]) // undefined

const find_pair = (arr) => {
  let ptr1 = 0;
  let ptr2 = arr.length - 1;

  while (ptr1 < ptr2) {
    const smaller = arr[ptr1];
    const bigger = arr[ptr2];

    const sum = smaller + bigger;

    if (sum === 0) return [smaller, bigger];
    if (sum > 0) --ptr2;
    if (sum < 0) ++ptr1;
  }
};
