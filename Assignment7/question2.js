// Give an example of using multiple callback functions in a single function in JavaScript

const function1 = (word1) => console.log(word1);
const function2 = (word2) => console.log(word2);
const function3 = (word3) => console.log(word3);

const mainFunction = (callback1, callback2, callback3) => {
  console.log("First i will print mainFunction");
  callback1("Function1");
  callback2("Function2");
  callback3("Function3");
};
mainFunction(function1, function2, function3);
