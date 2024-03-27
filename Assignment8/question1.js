// Find Error in below questions and rectify them
// Find Error in below questions and rectify them
// let myArray = [1, 2, 3, 4];
// for (let i = 0; i <= myArray.length; i++) {
//    console.log(myArray[i]);
//  // }

//  output of above code  1 2 3 4 undefined
// myArray length is 4 but it is accessing index 5 which is undefined

//Modified code
let myArray = [1, 2, 3, 4];
for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}
