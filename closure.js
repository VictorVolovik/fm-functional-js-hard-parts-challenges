// Challenge 1
const createFunction = () => {
  return function printHello() {
    console.log("hello");
  };
};

// /*** Uncomment these to check your work! ***/
// const function1 = createFunction();
// function1(); //-> 'hello'

// Challenge 2
const createFunctionPrinter = (input) => {
  return function printer() {
    console.log(input);
  };
};

// /*** Uncomment these to check your work! ***/
// const printSample = createFunctionPrinter("sample");
// printSample(); //-> 'sample'
// const printHello = createFunctionPrinter("hello");
// printHello(); //-> 'hello'

// Challenge 3
const outer = () => {
  let counter = 0; // this variable is outside incrementCounter's scope
  const incrementCounter = () => {
    counter++;
    console.log("counter", counter);
  };
  return incrementCounter;
};

const willCounter = outer();
const jasCounter = outer();

// /*** Uncomment these ***/
// // Before your do, guess what will be logged from each function call.

// willCounter();
// willCounter();
// willCounter();
// jasCounter();
// willCounter();

// Challenge 4
const addByX = (x) => {
  return function addBy(y) {
    return x + y;
  };
};

const addByTwo = addByX(2);

// /*** Uncomment these ***/
// console.log(addByTwo(1)); //-> 3
// console.log(addByTwo(2)); //-> 4

// Challenge 5
const once = (func) => {
  let result;

  return function calledOnce(...args) {
    if (!result) {
      result = func(...args);
    }
    return result;
  };
};

// /*** Uncomment these to check your work! ***/
// const onceFunc = once(addByTwo);
// const onceFuncWithMoreArgs = once((x, y) => x * y);
// console.log(onceFunc(4)); //-> 6
// console.log(onceFunc(10)); //-> 6
// console.log(onceFunc(9001)); //-> 6
// console.log(onceFuncWithMoreArgs(2, 4)); //-> 8
// console.log(onceFuncWithMoreArgs(2, 5)); //-> 8

// Challenge 6
const after = (count, func) => {
  let counter = count;

  return function calledAfter(...args) {
    if (counter === 0) {
      return func(...args);
    } else {
      counter--;
    }
  };
};

// /*** Uncomment these to check your work! ***/
// const called = () => console.log("hello");
// const afterCalled = after(3, called);
// afterCalled(); //-> nothing is printed
// afterCalled(); //-> nothing is printed
// afterCalled(); //-> nothing is printed
// afterCalled(); //-> 'hello' is printed

// Challenge 7

const delay = (func, wait, ...args) => {
  return () => setTimeout(func, wait, ...args);
};

// /*** Uncomment these to check your work! ***/
// const delayedLog = delay(console.log, 2000, "hello", "world");
// delayedLog(); //...2s -> 'hello' 'world'

// Challenge 8
const russianRoulette = (num) => {
  let counter = num;

  return function bangBang() {
    if (counter === 0) return "reload to play again";

    counter--;
    if (counter > 0) {
      return "click";
    }
    if (counter === 0) {
      return "bang";
    }
  };
};

// /*** Uncomment these to check your work! ***/
// const play = russianRoulette(3);
// console.log(play()); //-> 'click'
// console.log(play()); //-> 'click'
// console.log(play()); //-> 'bang'
// console.log(play()); //-> 'reload to play again'
// console.log(play()); //-> 'reload to play again'

// Challenge 9
const average = () => {
  let numbersCount = 0;
  let sum = 0;
  let currAverage = 0;

  return function addMore(newNum) {
    if (newNum) {
      numbersCount++;
      sum += newNum;
      currAverage = sum / numbersCount;
    }
    return currAverage;
  };
};

// /*** Uncomment these to check your work! ***/
// const avgSoFar = average();
// console.log(avgSoFar()); //-> 0
// console.log(avgSoFar(4)); //-> 4
// console.log(avgSoFar(8)); //-> 6
// console.log(avgSoFar()); //-> 6
// console.log(avgSoFar(12)); //-> 8
// console.log(avgSoFar()); //-> 8

// Challenge 10
const makeFuncTester = (arrOfTests) => {
  return function funcTester(func) {
    for (let [argument, expected] of arrOfTests) {
      if (func(argument) !== expected) {
        return false;
      }
    }
    return true;
  };
};

// /*** Uncomment these to check your work! ***/
// const capLastTestCases = [];
// capLastTestCases.push(["hello", "hellO"]);
// capLastTestCases.push(["goodbye", "goodbyE"]);
// capLastTestCases.push(["howdy", "howdY"]);
// const shouldCapitalizeLast = makeFuncTester(capLastTestCases);
// const capLastAttempt1 = (str) => str.toUpperCase();
// const capLastAttempt2 = (str) => str.slice(0, -1) + str.slice(-1).toUpperCase();
// console.log(shouldCapitalizeLast(capLastAttempt1)); //-> false
// console.log(shouldCapitalizeLast(capLastAttempt2)); //-> true

// Challenge 11
const makeHistory = (limit) => {
  let currentHistory = [];
  return function history(record) {
    if (record === "undo") {
      const undone = currentHistory.pop();
      return undone ? `${undone} undone` : "nothing to undo";
    }
    if (currentHistory.length === limit) {
      currentHistory.shift();
    }
    currentHistory.push(record);
    return `${record} done`;
  };
};

// /*** Uncomment these to check your work! ***/
// const myActions = makeHistory(2);
// console.log(myActions("jump")); //-> 'jump done'
// console.log(myActions("undo")); //-> 'jump undone'
// console.log(myActions("walk")); //-> 'walk done'
// console.log(myActions("code")); //-> 'code done'
// console.log(myActions("pose")); //-> 'pose done'
// console.log(myActions("undo")); //-> 'pose undone'
// console.log(myActions("undo")); //-> 'code undone'
// console.log(myActions("undo")); //-> 'nothing to undo'

// Challenge 12
const blackjack = (array) => {
  return function dealer(num1, num2) {
    let currentResult;
    let bust = false;
    return function player() {
      if (bust) {
        return "you are done!";
      }
      if (!currentResult) {
        currentResult = num1 + num2;
      } else {
        toAdd = array.shift();
        currentResult += toAdd;
        if (currentResult > 21) {
          bust = true;
          return "bust";
        }
      }
      return currentResult;
    };
  };
};

// /*** Uncomment these to check your work! ***/

// /*** DEALER ***/
// const deal = blackjack([
//   2, 6, 1, 7, 11, 4, 6, 3, 9, 8, 9, 3, 10, 4, 5, 3, 7, 4, 9, 6, 10, 11,
// ]);

// /*** PLAYER 1 ***/
// const i_like_to_live_dangerously = deal(4, 5);
// console.log(i_like_to_live_dangerously()); //-> 9
// console.log(i_like_to_live_dangerously()); //-> 11
// console.log(i_like_to_live_dangerously()); //-> 17
// console.log(i_like_to_live_dangerously()); //-> 18
// console.log(i_like_to_live_dangerously()); //-> 'bust'
// console.log(i_like_to_live_dangerously()); //-> 'you are done!'
// console.log(i_like_to_live_dangerously()); //-> 'you are done!'

// /*** BELOW LINES ARE FOR THE BONUS ***/

// /*** PLAYER 2 ***/
// const i_TOO_like_to_live_dangerously = deal(2, 2);
// console.log(i_TOO_like_to_live_dangerously()); //-> 4
// console.log(i_TOO_like_to_live_dangerously()); //-> 15
// console.log(i_TOO_like_to_live_dangerously()); //-> 19
// console.log(i_TOO_like_to_live_dangerously()); //-> 'bust'
// console.log(i_TOO_like_to_live_dangerously()); //-> 'you are done!
// console.log(i_TOO_like_to_live_dangerously()); //-> 'you are done!

// /*** PLAYER 3 ***/
// const i_ALSO_like_to_live_dangerously = deal(3, 7);
// console.log(i_ALSO_like_to_live_dangerously()); //-> 10
// console.log(i_ALSO_like_to_live_dangerously()); //-> 13
// console.log(i_ALSO_like_to_live_dangerously()); //-> 'bust'
// console.log(i_ALSO_like_to_live_dangerously()); //-> 'you are done!
// console.log(i_ALSO_like_to_live_dangerously()); //-> 'you are done!
