// function binarySearch(arr, target) {
//   let left = 0;
//   let right = arr.length - 1;

//   while (left <= right) {
//     const mid = Math.floor((left + right) / 2);
//     if (arr[mid] === target) return mid;
//     else if (arr[mid] < target) left = mid + 1;
//     else right = mid - 1;
//   }

//   return -1;
// }

// console.log(
//   binarySearch([2, 3, 9, 21, 34, 82, 92, 205, 582, 932, 2985, 3902], 34)
// );

function binarySearch(arr, target) {
  let left = 0,
    right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }

  return -1;
}

const sortedArray = [1, 3, 4, 6, 8, 9, 10, 22, 93, 221];

// function mergeSort(arr) {
//   if (arr.length <= 1) return arr; // base case

//   const mid = Math.floor(arr.length / 2);
//   const left = mergeSort(arr.slice(0, mid)); // log n splits
//   const right = mergeSort(arr.slice(mid)); // log n splits
//   console.log("left" , left)

//   return merge(left, right); // combine all n elements
// }

// function merge(left, right) {
//   let result = [];
//   let i = 0,
//     j = 0;

//   // merge until one side is empty
//   while (i < left.length && j < right.length) {
//     if (left[i] < right[j]) {
//       result.push(left[i]);
//       i++;
//     } else {
//       result.push(right[j]);
//       j++;
//     }
//   }

//   return result.concat(left.slice(i)).concat(right.slice(j));
// }

// const nums = [5, 2, 9, 1, 3, 7];
// console.log("Sorted:", mergeSort(nums));

const arr = [1, 3, true, 9, "Hello", 9, false, "World", 35, 92, [3, 5]];

const onlyNumber = arr.filter((value) => {
  if (typeof value === "number") return value;
});
