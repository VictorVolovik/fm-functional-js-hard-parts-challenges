// Challenge 1
const functionValidator = (funcArr, input, output) => {
  return funcArr.reduce((accum, curr) => {
    if (curr(input) === output) accum.push(curr);
    return accum;
  }, []);
};

// /*** Uncomment these to check your work! ***/
// const addFive = (num) => num + 5;
// const multiplyByTwo = (num) => num * 2;
// const subtractOne = (num) => num - 1;
// const fnArr = [addFive, multiplyByTwo, subtractOne];
// console.log(functionValidator(fnArr, 5, 10)); //-> [num => num + 5, num => num * 2]

// Challenge 2
const allClear = (funcArr, value) => {
  return funcArr.reduce((accum, curr) => {
    if (accum) {
      accum = curr(value);
    }
    return accum;
  }, true);
};

// /*** Uncomment these to check your work! ***/
// const isOdd = (num) => num % 2 === 1;
// const isPositive = (num) => num > 0;
// const multipleOfFive = (num) => num % 5 === 0;
// const numFnArr = [isOdd, isPositive, multipleOfFive];
// console.log(allClear(numFnArr, 25)); //-> true
// console.log(allClear(numFnArr, -25)); //-> false

// Challenge 3
const numSelectString = (numArr) => {
  return (
    numArr
      .filter((num) => num % 2 !== 0)
      .sort((a, b) => a - b)
      // .join(", "); // contrary to the challenge requirements
      .reduce((accum, curr) => accum + ", " + curr)
  );
};

// /*** Uncomment these to check your work! ***/
// const nums = [17, 34, 3, 12];
// console.log(numSelectString(nums)); //-> "3, 17"

// Challenge 4
const movieSelector = (moviesArr) => {
  return (
    moviesArr
      .filter((movie) => movie.score > 5)
      // .map((movie) => movie.title.toUpperCase()); // contrary to the challenge requirements
      .map((movie) => {
        movie.title = movie.title.toUpperCase();
        return movie;
      })
      .reduce((accum, curr) => {
        accum.push(curr.title);
        return accum;
      }, [])
  );
};

// /*** Uncomment these to check your work! ***/
// const movies = [
//   { id: 1, title: "Pan's Labyrinth", score: 9 },
//   { id: 37, title: "Manos: The Hands of Fate", score: 2 },
//   { title: "Air Bud", score: 5 },
//   { title: "Hackers", score: 7 },
// ];
// console.log(movieSelector(movies)); //-> [ "PAN'S LABYRINTH", "HACKERS" ]

// Challenge 5
const curriedAddThreeNums = (num1) => {
  return function addTwo(num2) {
    return function addThree(num3) {
      return num1 + num2 + num3;
    };
  };
};

// /*** Uncomment these to check your work! ***/
// console.log(curriedAddThreeNums(3)(-1)(1)); //-> 3

// Challenge 6
const curriedAddTwoNumsToFive = curriedAddThreeNums(5);

// /*** Uncomment these to check your work! ***/
// console.log(curriedAddTwoNumsToFive(6)(7)); //-> 18
