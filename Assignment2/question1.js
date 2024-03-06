let condition = "Y";
let prev = -1;
while (condition == "Y") {
  let num1 = Math.floor(Math.random() * 10 + 1);
  if (num1 != prev) {
    console.log(num1);
  }
  prev = num1;
 condition = prompt("enter Y for Continue else press anything:");
}
