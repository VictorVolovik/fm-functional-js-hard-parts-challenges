// Challenge 1
const addTwo = (num) => {
  return num + 2;
};

// /*** Uncomment these to check your work! ***/
// console.log(addTwo(3)); //-> 5
// console.log(addTwo(10)); //-> 12

// Challenge 2
const addS = (word) => {
  return word + "s";
};

// /*** Uncomment these to check your work! ***/
// console.log(addS("pizza")); //-> pizzas
// console.log(addS("bagel")); //-> bagels

// Challenge 3
const map = (array, callback) => {
  let output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(callback(array[i]));
  }
  return output;
};

// /*** Uncomment these to check your work! ***/
// console.log(map([1, 2, 3], addTwo)); //-> [3, 4, 5]

// Challenge 4
const forEach = (array, callback) => {
  for (let i = 0; i < array.length; i++) {
    callback(array[i]);
  }
};

// /*** Uncomment these to check your work! ***/
// let alphabet = "";
// const letters = ["a", "b", "c", "d"];
// forEach(letters, (char) => (alphabet += char));
// console.log(alphabet); // --> 'abcd'

// Challenge 5
const mapWith = (array, callback) => {
  let output = [];
  forEach(array, (item) => output.push(callback(item)));
  return output;
};

// /*** Uncomment these to check your work! ***/
// console.log(mapWith([1, 2, 3], addTwo)); //-> [3, 4, 5]

// Challenge 6
const reduce = (array, callback, initialValue) => {
  let accum = initialValue;
  for (let i = 0; i < array.length; i++) {
    accum = callback(accum, array[i]);
  }
  return accum;
};

// /*** Uncomment these to check your work! ***/
// const nums = [4, 1, 3];
// const add = (a, b) => a + b;
// console.log(reduce(nums, add, 0)); //-> 8

// Challenge 7
const intersection = (...arrays) => {
  const intersected = arrays.reduce((accum, curr) => {
    return curr.filter((el) => accum.includes(el));
  });
  return intersected;
};

// /*** Uncomment these to check your work! ***/
// console.log(
//   intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20])
// );
// // should log: [5, 15]

// Challenge 8
const union = (...arrays) => {
  const united = arrays.reduce((accum, curr) => {
    const newUniqueElements = curr.filter((el) => !accum.includes(el));
    return accum.concat(newUniqueElements);
  });
  return united;
};

// /*** Uncomment these to check your work! ***/
// console.log(union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]));
// // should log: [5, 10, 15, 88, 1, 7, 100]

// Challenge 9
const objOfMatches = (array1, array2, callback) => {
  let matched = {};
  for (let i = 0; i < array1.length; i++) {
    const result = callback(array1[i]);
    const expected = array2[i];
    if (result === expected) {
      matched[array1[i]] = expected;
    }
  }
  return matched;
};

// /*** Uncomment these to check your work! ***/
// console.log(
//   objOfMatches(
//     ["hi", "howdy", "bye", "later", "hello"],
//     ["HI", "Howdy", "BYE", "LATER", "hello"],
//     (str) => str.toUpperCase()
//   )
// );
// // should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }

// Challenge 10
const multiMap = (arrVals, arrCallbacks) => {
  return arrVals.reduce((accum, curr) => {
    accum[curr] = arrCallbacks.map((callback) => callback(curr));
    return accum;
  }, {});
};

// /*** Uncomment these to check your work! ***/
// console.log(
//   multiMap(
//     ["catfood", "glue", "beer"],
//     [
//       (str) => str.toUpperCase(),
//       (str) => str[0].toUpperCase() + str.slice(1).toLowerCase(),
//       (str) => str + str,
//     ]
//   )
// );
// // should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }

// Challenge 11
const commutative = (func1, func2, value) => {
  const result1 = func2(func1(value));
  const result2 = func1(func2(value));
  return result1 === result2;
};

// /*** Uncomment these to check your work! ***/
// const multBy3 = (n) => n * 3;
// const divBy4 = (n) => n / 4;
// const subtract5 = (n) => n - 5;
// console.log(commutative(multBy3, divBy4, 11)); //-> true
// console.log(commutative(multBy3, subtract5, 10)); //-> false
// console.log(commutative(divBy4, subtract5, 48)); //-> false

// Challenge 12
const objFilter = (obj, callback) => {
  let filtered = {};
  for (let [key, value] of Object.entries(obj)) {
    const result = callback(key);
    if (result === value) {
      filtered[key] = value;
    }
  }
  return filtered;
};

// /*** Uncomment these to check your work! ***/
// const startingObj = {};
// startingObj[6] = 3;
// startingObj[2] = 1;
// startingObj[12] = 4;
// const half = (n) => n / 2;
// console.log(objFilter(startingObj, half)); //-> { 2: 1, 6: 3 }

// Challenge 13
const rating = (arrOfFuncs, value) => {
  const successful = arrOfFuncs.filter((func) => func(value));
  return (successful.length / arrOfFuncs.length) * 100;
};

// /*** Uncomment these to check your work! ***/
// const isEven = (n) => n % 2 === 0;
// const greaterThanFour = (n) => n > 4;
// const isSquare = (n) => Math.sqrt(n) % 1 === 0;
// const hasSix = (n) => n.toString().includes("6");
// const checks = [isEven, greaterThanFour, isSquare, hasSix];
// console.log(rating(checks, 64)); //-> 100
// console.log(rating(checks, 66)); //-> 75

// Challenge 14
const pipe = (arrOfFuncs, value) => {
  for (let func of arrOfFuncs) {
    value = func(value);
  }
  return value;
};

// /*** Uncomment these to check your work! ***/
// const capitalize = (str) => str.toUpperCase();
// const addLowerCase = (str) => str + str.toLowerCase();
// const repeat = (str) => str + str;
// const capAddlowRepeat = [capitalize, addLowerCase, repeat];
// console.log(pipe(capAddlowRepeat, "cat")); //-> 'CATcatCATcat'

// Challenge 15
const highestFunc = (objOfFuncs, subject) => {
  let highestResultKey;
  let highestResult;
  for (let [key, func] of Object.entries(objOfFuncs)) {
    const result = func(subject);
    if (!highestResult || result > highestResult) {
      highestResultKey = key;
      highestResult = result;
    }
  }
  return highestResultKey;
};

// /*** Uncomment these to check your work! ***/
// const groupOfFuncs = {};
// groupOfFuncs.double = (n) => n * 2;
// groupOfFuncs.addTen = (n) => n + 10;
// groupOfFuncs.inverse = (n) => n * -1;
// console.log(highestFunc(groupOfFuncs, 5)); //-> 'addTen'
// console.log(highestFunc(groupOfFuncs, 11)); //-> 'double'
// console.log(highestFunc(groupOfFuncs, -20)); //-> 'inverse'
