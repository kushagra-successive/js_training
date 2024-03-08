//function to take input(age, name, phone no.) from user and display it

const details = function () {
  let name = prompt("Enter the name : ");
  let age = prompt("Enter the age : ");
  let phoneNumber = prompt("Enter the phoneNumber : ");
  console.log("name: ", name + "\nage: ", age + "\nphoneNumber: ", phoneNumber);
};
details();
