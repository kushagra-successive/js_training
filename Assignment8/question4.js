//find error in below question and rectify them
// let myString = 'hello world';
// if (myString.length > 0) {
//     console.log('The length of the string is: ' + myString.length);
// } else {
//     console.log('The string is empty');
// }

// let myNumber = parseInt(myString);
// if (myNumber) {
//    console.log('The number is: ' + myNumber);
// } else {
//    console.log('The value is not a number');
// }
// output->The length of the string is: 11
// The value is not a number

// there is no error in above code but there Could be one improvment that
// there is no use of parseInt here because myString is not a numeric string so it can't convert it into Number,so myNumber will be NaN in above code.

let myString = "hello world";
if (myString.length > 0) {
  console.log("The length of the string is: " + myString.length);
} else {
  console.log("The string is empty");
}

let myNumber = myString;
if (myNumber) {
  console.log("The number is: " + myNumber);
} else {
  console.log("The value is not a number");
}
