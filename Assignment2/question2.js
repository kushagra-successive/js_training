//function to take input(age, name, phone no.) from user and display it

const details = function () {
  const name = prompt("Enter the name : ");
  const age = prompt("Enter the age : ");
  const phoneNumber = prompt("Enter the phoneNumber : ");
  console.log("name: ", name + "\nage: ", age + "\nphoneNumber: ", phoneNumber);
};
details(); //printing the userDetails
