let num = 1;
for (let row = 0; row < 4; row++) {
  let str = " ";
  for (let column = 0; column < row + 1; column++) {
    str += num + " ";
    num++;
  }
  console.log(str);
}

console.log();

for (let row = 0; row < 4; row++) {
  let str = " ";
  for (let column = 0; column < row + 1; column++) {
    str += row + 1 + " ";
  }
  console.log(str);
}

console.log();

let newnum = 5;
for (let row = 0; row < 5; row++) {
  let str = " ";
  for (let column = 0; column < newnum; column++) {
    str += column + 1 + " ";
  }
  console.log(str);
  newnum--;
}
for (let row = 0; row < 5; row++) {
  let str = " ";
  for (let column = 0; column < row + 1; column++) {
    str += column + 1 + " ";
  }
  if (row != 0) console.log(str);
}
