//function expression that takes in a number and returns true if it's even and false if it's odd

let isEven = function (number) {
  if (number % 2 == 0)
    return true; //condition check whether given nnumber is even or odd
  else return false;
};
console.log(isEven(88));
