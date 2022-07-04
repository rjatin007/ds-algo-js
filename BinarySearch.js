const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// loop solution -NON repetitive

const binarySearch = (arr, item) => {
  let beg = 0;
  let end = arr.length - 1;
  let mid = Math.floor((beg + end) / 2);
  let index = null;
  while (beg <= end) {
    if (item > arr[mid]) {
      beg = mid + 1;
      mid = Math.floor((beg + end) / 2);
    } else if (item < arr[mid]) {
      end = mid - 1;
      mid = Math.floor((beg + end) / 2);
    } else if (item == arr[mid]) {
      index = mid;
      break;
    }
  }
  return beg > end && index === null ? -1 : index;
};
console.log(binarySearch([1, 2, 3, 4, 5], 3)); // 2
console.log(binarySearch([1, 2, 3, 4, 5], 5)); // 4
console.log(binarySearch([1, 2, 3, 4, 5], 6)); // -1
console.log(
  binarySearch(
    [
      5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
      99,
    ],
    10
  )
); // 2
console.log(
  binarySearch(
    [
      5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
      99,
    ],
    95
  )
); // 16
console.log(
  binarySearch(
    [
      5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
      99,
    ],
    100
  )
);
console.log(binarySearch(arr, 7));

// recursion solution -NON repetitive

// const recursionBinarySearch=(arr, item)=>{
//     const runBinarySearch=(beg,mid,end,item)=>{

//     }
// }
