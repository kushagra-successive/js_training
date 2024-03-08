//program to sort an array of object on the basis of age ({name:"John", age:26})

const userDetails = [
  { Name: "Kushagra", age: 24, isMarried: false },
  { Name: "Shyam", age: 44, isMarried: true },
  { Name: "Pawan", age: 41, isMarried: true },
  { Name: "Vinod", age: 28, isMarried: false },
];
userDetails.sort((a, b) => a.age - b.age);
console.log(userDetails);
