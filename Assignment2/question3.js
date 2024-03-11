//function expression that takes in another function as an argument

const baseFunction = function (another) {
  console.log("I am in baseFunction");
  anotherFunction(); //function call to lastFunction
};
const anotherFunction = function () {
  console.log(`I am in anotherFunction`);
};
baseFunction(anotherFunction); //function call to firtsFunction
