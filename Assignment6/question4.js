//Create a class called `Person` that has properties for `firstName`, `lastName`, and `age`. The class should also have a method called `fullName` that returns the person's full name.Additionally, the class should have a method called `averageAge` that takes in an array of `Person` objects and returns the average age of all the people in the array

class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  fullName() {
    return this.firstName + this.lastName;
  }

  averageAge(personAge) {
    let average;
    average = personAge.reduce((initial, first) => initial + first); //it will return single number and then use use formula of Average
    return average / personAge.length;
  }
}
const personObj = new Person("Kushagra ", "Bajpai", 23);
console.log("FullName: ", personObj.fullName());
console.log("AverageAge: ", personObj.averageAge([23, 44, 65, 44]));
