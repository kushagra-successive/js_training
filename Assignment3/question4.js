let size = 50;
let arr_even = [];
let arr_odd = [];
for (let i = 0; i < size; i++) {
  if (i % 2 == 0) arr_even.push(i);
}
for (let i = 0; i < size; i++) {
  if (i % 2 != 0) arr_odd.push(i);
}
console.log("even : " + arr_even);
console.log("odd : " + arr_odd);
