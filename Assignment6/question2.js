//class Shape with properties width and height and methods getArea(). Create two classes Rectangle and Triangle that inherit from the Shape class and implement the getArea() method for their respective shapes.

class Shape {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  getArea() {
    return;
  }
}
class Rectangle extends Shape {
  //inheriting the properties from base class
  constructor(width, height) {
    super(width, height); //to access baseclass constructor
  }

  getArea() {
    return this.height * this.width; //applying function overriding
  }
}
class Triangle extends Shape {
  //inheriting the properties from base class
  constructor(base, height) {
    super(base, height);
  }

  getArea() {
    return (this.height * this.width) / 2;
  }
}
//creating objects for classes
const obj1 = new Rectangle(10, 23);
const obj2 = new Triangle(10, 23);
console.log("Area of Trianle: ", obj2.getArea());
console.log("Area of Rectangle: ", obj1.getArea());
