"use strict";

// * comments for lesson
// ! important information
// TODO
//  Title

// Arrays Methods
// unshift

// const num = [45, 10, 78, 14];

// console.log(num, "before");
// num.unshift(50);
// console.log(num, "after");
// * The unshift() method adds the specified elements to the beginning of an array and returns the new length of the array.

// shift

// const num = [45, 10, 78, 14];

// console.log(num, "----");
// num.shift();
// console.log(num, "^^^^^^");
// * The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.

// push

// const num = [45, 10, 78, 14];

// console.log(num, "----");
// num.push(999);
// console.log(num, "^^^^^^");
// * The push() method adds the specified elements to the end of an array and returns the new length of the array.

// pop

// const num = [45, 10, 78, 14];

// console.log(num, "----");
// num.pop();
// console.log(num, "^^^^^^");
// * The pop() method removes the last element from an array and returns that element. This method changes the length of the array.

// concat

// const numX = [88, 54, 6, 14];
// const numY = [8, 4, 46, 71];

// console.log(numX.concat(numY));
// console.log(numX);
// console.log(numY);

// const newNum = numX.concat(numY);
// console.log(newNum, "----");
// * The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
// * after the return can be stored in a variable

// indexOf

// const userName = ["Anna", "Levon", "Aram", "Jack", "Martin"];

// userName.indexOf("Anna");
// const newName = userName.indexOf("Anna");
// userName[newName] = "Kevin"; //*  change "Anna" in "Kevin"
// console.log(userName, "---");

// const userInfo = ["car", "Desinger", 25, "Armenia", "car", "Arm"];

// userInfo.indexOf("Yerevan");
// console.log(userInfo.indexOf("Yerevans")); //* -1
// console.log(userInfo.lastIndexOf("car"));

// * The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
// * If a value was called that is not in the array, we get -1
// * We can find the index of the element, save it to a variable and then change
// * The lastIndexOf() method returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards

// filter

const cash = [40, 800, -54, -350, 60, -78, 900];

// const newCash = cash.filter(function (value, i) {
//   return value > 0;
// });

// const newCash = cash.filter(function (value, i) {
//   return value < 0;
// });

// const newCash = cash.filter(function (value, i, arr) {
//   return value > 0 && value < 500;
// });

// console.log(newCash, "---");

/*
 * The filter() method creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the
 * test implemented by the provided function.
 */

// map

// const mony = [5, 78, -45, -104, 9, 98];
// const newMony = mony.map((key, index, arr) => {
//   return `I have ${index + 1}: ${key > 0 ? "Cash" : "spent"} mony ${Math.abs(
//     key
//   )}$`;
// });

// console.log(newMony, "___");

// * The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

// sort

// const month = ["October", "July ", "May", "February"];
// console.log(month, "---");
// const newMounth = month.sort();
// console.log(newMounth, "___");

// const num = [47, 8, 74, 52, 14, 3];
// const numItem = num.sort((a, b) => a - b);
// console.log(numItem, "___");
/*
 *- The sort() method sorts the elements of an array in place and returns the reference to the same array, now sorted. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.
 *- The time and space complexity of the sort cannot be guaranteed as it depends on the implementation.
 *-To sort the elements in an array without mutating the original array, use toSorted().
 */

// reduce

const numNum = [2, 5, 47, 36, 8];
// const myReduce = function (arr) {
//   let aggr = 0;
//   arr.forEach(function (i) {
//     aggr += i;
//   });

//   return aggr;
// };

// console.log(myReduce(numNum), "____");

// const myReduce = numNum.reduce(function (aggr, val) {
//   return aggr + val;
// }, 0);

// console.log(myReduce, "***");

// const userInfo = [
//   {
//     userName: "Levon",
//   },
//   {
//     age: 25,
//   },

//   {
//     phone: "8574584158",
//   },
// ];

// console.log(userInfo, "+++++++++++");

// const userReduce = userInfo.reduce(function (name, i) {
//   if (i.userName !== undefined) {
//     name.userName = i.userName;
//   }
//   if (i.age !== undefined) {
//     name.age = i.age;
//   }
//   if (i.phone !== undefined) {
//     name.phone = i.phone;
//   }

//   return name;
// }, {});

// console.log(userReduce, "___");

/*
 *- The reduce() method executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.
 *- The first time that the callback is run there is no "return value of the previous calculation". If supplied, an initial value may be used in its place. Otherwise the array element at index 0 is used as the initial value and iteration starts from the next element (index 1 instead of index 0).
 *- Perhaps the easiest-to-understand case for reduce() is to return the sum of all the elements in an array:
 */

// forEach

// const movements = [450, 78, 458, 14, -5, -145, 87];

// const numMov = movements.forEach(function (val, i, arr) {
//   if (val > 0) {
//     console.log(`I have ${i + 1}: ${val}$`);
//   } else {
//     console.log(`I withdraw ${i + 1}: ${Math.abs(val)}$ `);
//   }
// });

// * The forEach() method executes a provided function once for each array element.

// includes

// const animal = ["cat", "dog", "monkey"];

// const resAnimal = animal.includes("horse");
// const resAnimal = animal.includes("cat");
// console.log(resAnimal);

// const number = [10, 8, 17];

// const numIncludes = number.includes(4);
// const numIncludes = number.includes(17);
// console.log(numIncludes);

// * The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.
