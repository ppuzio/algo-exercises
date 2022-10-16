// Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.
// averagePair([1,2,3],2.5) // true
// averagePair([1,3,3,5,6,7,10,12,19],8) // true
// averagePair([-1,0,3,4,5,6], 4.1) // false
// averagePair([],4) // false

function averagePair(array, desiredAvg) {
  if (array.length === 0) return false;
  let ptr1 = Math.floor(array.length / 2);
  let ptr2 = ptr1 + 1;

  let avg = (array[ptr1] + array[ptr2]) / 2;

  if (desiredAvg === avg) return true;
  let turns = 1;

  const helper = {
    [`${array[ptr1]}${array[ptr2]}`]: avg,
  };

  while (turns < array.length * 2) {
    if (
      avg > desiredAvg &&
      helper[`${array[ptr1 - 1]}${array[ptr2]}`] === undefined
    ) {
      ptr1--;
    } else if (
      avg > desiredAvg &&
      ptr2 - ptr1 > 1 &&
      helper[`${array[ptr1]}${array[ptr2 - 1]}`] === undefined
    ) {
      ptr2--;
    } else if (
      avg < desiredAvg &&
      ptr2 - ptr1 > 1 &&
      helper[`${array[ptr1 + 1]}${array[ptr2]}`] === undefined
    ) {
      ptr1++;
    } else if (
      avg < desiredAvg &&
      helper[`${array[ptr1]}${array[ptr2 + 1]}`] === undefined
    ) {
      ptr2++;
    } else {
      return false;
    }

    avg = (array[ptr1] + array[ptr2]) / 2;
    if (desiredAvg === avg) return true;
    helper[`${array[ptr1]}${array[ptr2]}`] = avg;
  }
  return false;
}

// averagePair Solution
// function averagePair(arr, num){
//   let start = 0
//   let end = arr.length-1;
//   while(start < end){
//     let avg = (arr[start]+arr[end]) / 2
//     if(avg === num) return true;
//     else if(avg < num) start++
//     else end--
//   }
//   return false;
// }
