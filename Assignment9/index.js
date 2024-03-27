// 2.Install the lodash package using npm install lodash. and use any of its function

// 3.create a new folder named 'math' and create a file math.js. In math.js, define two functions:
// a. add(a, b): takes two numbers as arguments and returns their sum.
// b. subtract(a, b): takes two numbers as arguments and returns their difference.
// create a new file index.js and just export those functions and then use those function in any of the file

const { add, subtract } = require("./math/math");
const { divide } = require("lodash");
console.log(add(2, 4));
console.log(subtract(2, 4));
console.log(divide(2, 4));
