let num1 = +prompt("Enter value1 ");
let num2 = +prompt("Enter value2 ");
let operation = +prompt("Enter 1:Add , 2:Subtract , 3:Multiply , 4:Divide ");

switch (operation) {
  case 1: {
    console.log("SUM : " + (num1 + num2));
    break;
  }
  case 2: {
    console.log("SUBTRACTION : " + (num1 - num2));
    break;
  }
  case 3: {
    console.log("MULTIPLY : " + num1 * num2);
    break;
  }
  case 4: {
    console.log("Divide : " + num1 / num2);
    break;
  }
  default:
    console.log("Wrong Entry");
    break;
}
