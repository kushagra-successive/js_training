//function expression that takes in another function as an argument

let baseFunction = function (another) {
  console.log("I am in baseFunction");
  anotherFunction();
};
let anotherFunction = function () {
  console.log(`I am in anotherFunction`);
};
baseFunction(anotherFunction, 10);
