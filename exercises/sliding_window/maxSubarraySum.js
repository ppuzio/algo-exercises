// input - array of integers and number n of elements
// return the maximum sum of n consecutive elements
maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 2); // 10
maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 1); // 8
maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 4); // 17

const sumNumbers = (arr) => arr.reduce((acc, curr) => acc + curr, 0);

const maxSubArraySum = (array, elements) => {
  const firstArr = array.slice(0, elements);
  let sum = sumNumbers(firstArr);

  for (let i = 0; i < array.length - elements + 1; i++) {
    const firstEl = firstArr[0];
    const nextEl = array[i + elements];
    firstArr.push(nextEl);
    firstArr.shift();
    if (firstEl < nextEl) {
      const checksum = sumNumbers(firstArr);
      if (checksum > sum) sum = checksum;
    }
  }
  return sum;
};

const maxSubArraySumWithSumAsWindow = (array, elements) => {
  let maxSum = 0;
  for (let i = 0; i < elements; i++) {
    maxSum += array[i];
  }
  let tempSum = maxSum;
  for (let j = elements; j < array.length; j++) {
    tempSum = tempSum - array[j - elements] + array[j];
    maxSum = Math.max(tempSum, maxSum);
  }
  return maxSum;
};
