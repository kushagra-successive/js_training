//1. Create a class Person with properties name, age, gender, and interests. Add a method greeting() that returns a string introducing the person. Also add a method farewell() that returns a string saying goodbye to the person.

class Person {
  constructor(name, age, gender, interest) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.interest = interest;
  }

  greeting() {
    console.log(
      `Hello everyone my Name is ${this.name},I am ${this.age}years old and my hobbies are ${this.interest}`
    );
  }

  farewell() {
    console.log(`GoodBye ${this.name}`);
  }
}

const personObj = new Person("Kushagra Bajpai", 23, "male", [
  "Travelling",
  "Playing Cricket",
  "Singing",
]);
personObj.greeting();
personObj.farewell();

//2. Create a class Student that inherits from the Person class and has a property studies. Override the greeting() method to include information about what the student is studying.

class Student extends Person {
  constructor(name, age, gender, interest, studies) {
    super(name, age, gender, interest);
    this.studies = studies; // adding subject which studies
  }
  //function overriding
  greeting() {
    console.log(
      `Hello everyone my Name is ${this.name},I am ${this.age}years old my hobbies are ${this.interest} and currently I am studying ${this.studies}`
    );
  }
}
//creating objects for Student
const studentObj = new Student(
  "Kushagra Bajpai",
  23,
  "male",
  ["Travelling", "Playing Cricket", "Singing"],
  "Javascript"
);
studentObj.greeting();

//3. Create a class Teacher that inherits from the Person class and has a property subjectsTaught. Override the farewell() method to include information about what the teacher teaches.

class Teacher extends Person {
  constructor(name, age, gender, interest, subjectsTaught) {
    super(name, age, gender, interest);
    this.subjectsTaught = subjectsTaught; //adding subjects taught by Teacher
  }

  farewell() {
    console.log(`GoodBye ${this.name} Teacher taught ${this.subjectsTaught}`);
  }
}
const teacherObj = new Teacher(
  "Kushagra Bajpai",
  23,
  "male",
  ["Travelling", "Playing Cricket", "Singing"],
  "Mathematics"
);
teacherObj.farewell();
