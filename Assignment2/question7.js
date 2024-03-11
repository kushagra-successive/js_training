//questions from 3-6 needs to be done with arrow functions also

//3. arrow function that takes in another function as an argument

const baseFunction = (another) => {
  console.log("I am in baseFunction");
  anotherFunction();
};
const anotherFunction = () => {
  console.log(`I am in anotherFussnction`);
};
baseFunction(anotherFunction, 10);

//4. arrow function that takes in a number and returns its square.

const square = (val) => val * val;
console.log(square(10));

//5. arrow function that takes in two numbers and returns their sum.

const sum = (num1, num2) => num1 + num2;
console.log(sum(20, 30));

//6. arrow function that takes a number and returns true if even and false it's odd.

const isEven = (number) => {
  if (number === 0) return "Neither Even nor Odd";
  if (number % 2 === 0) return true;
  else return false;
};
console.log(isEven(0));
