//program to perform functionality of a calculator (add,sub,multiply,divide)

//taking operands from user for calculation
// '+' before prompt convert into number from string
const num1 = +prompt("Enter value1 ");
const num2 = +prompt("Enter value2 ");

//taking user's choice as input for operation
const operation = +prompt("Enter 1:Add , 2:Subtract , 3:Multiply , 4:Divide ");

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
    console.log("Wrong Entry"); //when user give invalid input
    break;
}
