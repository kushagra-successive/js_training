//program to give a random output between 1 to 10 (AC: 2 simultaneous answers not be same)

let condition = "Y";
let prev = -1;
//loop save previous value and then comapre with next random value everytime until termination
while (condition == "Y") {
  let num1 = Math.floor(Math.random() * 10 + 1);
  if (num1 !== prev) {
    console.log(num1);
  }
  prev = num1;
  condition = prompt("enter Y for Continue else press anything:");
}
