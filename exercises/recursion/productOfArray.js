// Write a function called productOfArray which takes in an array of numbers and returns the product of them all.

const productOfArray = (arr) => {
  if (arr.length === 0) return 0;
  let product = 1;

  const processArr = (arr) => {
    if (arr.length < 1) return 1;
    product *= arr[0];
    return processArr(arr.slice(1));
  };

  processArr(arr);
  return product;

  //   if(arr.length === 0) {
  //     return 1;
  // }
  // return arr[0] * productOfArray(arr.slice(1));
};
