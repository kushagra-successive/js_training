// Find Error in below questions and rectify them
// let myObject = { name: 'John', age: 30 };
// for (property in myObject) {
//    console.log(property + ': ' + myObject.property);
// }

// output ->name: undefined
// age: undefined

// myObject.property is wrong way to access key

//correct code for above code
let myObject = { name: "John", age: 30 };
for (property in myObject) {
  console.log(property + ": " + myObject[property]);
}
