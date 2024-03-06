//3. arrow function that takes in another function as an argument

let baseFunction = (another) => {
  console.log("I am in baseFunction");
  anotherFunction();
};
let anotherFunction = () => {
  console.log(`I am in anotherFussnction`);
};
baseFunction(anotherFunction, 10);

//4. arrow function that takes in a number and returns its square.

let square = (val) => val * val;
console.log(square(10));

//5. arrow function that takes in two numbers and returns their sum.

let sum = (num1, num2) => num1 + num2;
console.log(sum(20, 30));

//6. arrow function that takes a number and returns true if even and false it's odd.

let isEven = (number) => {
  if (number % 2 == 0) return true;
  else return false;
};
console.log(isEven(63));
