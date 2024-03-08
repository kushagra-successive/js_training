//function expression that takes in another function as an argument

let baseFunction = function (another) {
  console.log("I am in baseFunction");
  anotherFunction(); //function call to lastFunction
};
let anotherFunction = function () {
  console.log(`I am in anotherFunction`);
};
baseFunction(anotherFunction); //function call to firtsFunction
