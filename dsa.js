// function fibNumberFinder(times) {
//   if (times <= 1) return times;

//   return fibNumberFinder(times - 1) + fibNumberFinder(times - 2);
// }
// console.log(fibNumberFinder(30));

// const values = [2, 4, 6, 9, 2, 4, 92, 492, 932, 93, 92, 1, 942, 753, 923];

// let minValue = values[0];

// values.forEach((value) => {
//   if (value <= minValue) {
//     minValue = value;
//   }
// });

// console.log(minValue)

const arr = [
  42, 17, 89, 3, 56, 74, 28, 61, 9, 38, 92, 25, 7, 84, 46, 13,9, 70, 99, 31, 60,
  -5, -83, 134,
];

// function bubbleSort(arr) {
//   const n = arr.length;

//   for (let i = 0; i < n - 1; i++) {
//     for (let j = 0; j < n - i - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         const temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }

//   return arr
// }

// // function selectionSort(arr) {
// //   const n = arr.length;

// //   for (let i = 0; i < n; i++) {
// //     let mindex = i;
// //     for (let j = i + 1; j < n; j++) {
// //       if (arr[mindex] > arr[j]) {
// //         mindex = j;
// //       }
// //     }

// //     if (mindex !== i) {
// //       const temp = arr[i];
// //       arr[i] = arr[mindex];
// //       arr[mindex] = temp;
// //     }
// //   }

// //   return arr
// // }

// function bubbleSort(arr) {
//   const n = arr.length;

//   for (let i = 0; i < n - 1; i++) {
//     for (let j = 0; j < n - i - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         const temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }

//   return arr;
// }

// function bubbleSort(arr) {
//   const n = arr.length;

//   for (let i = 0; i < n - 1; i++) {
//     for (let j = 0; j < n - 1 - i; j++) {
//       if (arr[j] > arr[j + 1]) {
//         const temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }

//   return arr
// }

// function bubbleSort(arr) {
//   const n = arr.length;

//   for (let i = 0; i < n - 1; i++) {
//     for (let j = 0; j < n - 1 - i; j++) {
//       if (arr[j] > arr[j + 1]) {
//         const temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }

//   return arr;
// }

function selectionSort(arr) {
  const n = arr.length;

  for (let i = 0; i < n; i++) {
    let mindex = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[mindex] > arr[j]) {
        mindex = j;
      }
    }

    if (mindex !== i) {
      const temp = arr[i];
      arr[i] = arr[mindex];
      arr[mindex] = temp;
    }
  }

  return arr;
}


console.log(selectionSort(arr))