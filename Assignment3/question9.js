//program to print fibonaaci series

let n1 = 0,
  n2 = 1;
let limit = 10;
console.log("fibanocci series");
for (let i = 0; i <= limit; i++) {
  if (i <= 1) console.log(i);
  else {
    let n3 = n1 + n2;
    console.log(n3);
    n1 = n2;
    n2 = n3;
  }
}
