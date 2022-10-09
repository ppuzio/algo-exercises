// check if array 2 contains elements from array 1 squared
// assume the frequency must match
// eg same([2,1,3,2], [9,4,4,1]) === true
// go for an O(n) implementation without obvious nested loop

// same([1,2,3,2], [4,9,4,1]) === true
// { 1: 1, 2: 2, 3: 1}, {4: 2, 9: 1, 1: 1}

// frequency counter pattern

const same = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;
  counter1 = {};
  counter2 = {};

  for (n of arr1) {
    counter1[n] = (counter1[n] ?? 0) + 1;
  }
  for (m of arr2) {
    counter2[m] = (counter2[m] ?? 0) + 1;
  }

  for (k in counter1) {
    if (counter2[k * k] === undefined) return false;
    if (counter1[k] !== counter2[k * k]) return false;
  }
  return true;
};

// same([1,2,3,2], [4,9,4,1])
// same([1,2,3], [4,9,4,1])
// same([1,2,3,2], [4,8,4,1])
