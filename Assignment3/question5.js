//program to print all even number first and then all odd numbers using only one iteration

const size = 50;
const arr_even = [];
const arr_odd = [];
for (let i = 0; i < size; i++) {
  if (i === 0) continue;
  if (i % 2 == 0) arr_even.push(i);
  else arr_odd.push(i);
}
console.log("evenNumbers:" + arr_even);
console.log("oddNumbers:" + arr_odd);
