//function expression that takes in a number and returns true if it's even and false if it's odd

const isEven = function (number) {
  if (number === 0) return "Neither Even nor Odd";
  if (number % 2 === 0)
    return true; //condition check whether given nnumber is even or odd
  else return false;
};
console.log(isEven(1));
