//program to print all even number first and then all odd numbers

let size = 50;
let arr_even = [];
let arr_odd = [];
for (let i = 0; i < size; i++) {
  if (i % 2 == 0) arr_even.push(i); //pushing the even numbers
}
for (let i = 0; i < size; i++) {
  if (i % 2 != 0) arr_odd.push(i); ////pushing the odd numbers
}
console.log("even : " + arr_even);
console.log("odd : " + arr_odd);
