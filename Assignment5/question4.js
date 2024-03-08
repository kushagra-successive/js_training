//program deepClone that takes an object as input and returns a deep copy of that object. The function should handle nested objects and arrays

const object1 = {
  name: "Kushagra Bajpai",
  age: 42,
  address: {
    nameadd: "Sector 128",
    streetno: 23,
    pincode: 201304,
  },
  marks: [89, 91, 97, 89],
};

let user = JSON.parse(JSON.stringify(object1)); // deep clone
user.marks[0] = 100;
user.age = 23;
console.log(user);
console.log(object1);
