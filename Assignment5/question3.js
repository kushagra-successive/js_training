//program to remove all the id key from array of object ({name:"John", age:27, id:1})

const userDetails = [
  { Name: "Kushagra", age: 24, id: 1022 },
  { Name: "Shyam", age: 44, id: 1021 },
  { Name: "Pawan", age: 41, id: 1044 },
  { Name: "Vinod", age: 28, id: 1532 },
];
for (let obj of userDetails) {
  delete obj.id; //deleting the property id
}
console.log(userDetails);
