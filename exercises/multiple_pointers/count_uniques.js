// given a sorted array, return how many different digits there are
// return 0 if none
// countUnique([1,1,1,1,1,2]) // 2
// countUnique([-3, -2, -2, 0, 1, 5]) // 5

const countUnique = (arr) => {
  if (arr.length === 0) return 0;
  let ptr1 = 0;
  let ptr2 = 1;
  let uniq = 1;
  while (ptr1 < arr.length && ptr2 < arr.length) {
    if (!(arr[ptr1] === arr[ptr2])) {
      uniq++;
    }
    ptr1 > ptr2 ? (ptr2 = ptr1 + 1) : (ptr1 = ptr2 + 1);
  }
  return uniq;
};
