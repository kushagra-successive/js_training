let num = 5;
for (let row = 0; row < num; row++) {
  let space = " ";
  let str = " ";
  for (let gap = 0; gap < num - row - 1; gap++) {
    space += " ";
  }
  for (let column = 0; column < row + 1; column++) {
    str += "*" + " ";
  }
  console.log(space, str);
}
num--;
for (let row = 0; row < 4; row++) {
  let space = " ";
  let str = " ";
  for (let gap = 0; gap < row + 1; gap++) {
    space += " ";
  }
  for (let column = 0; column < num; column++) {
    str += "*" + " ";
  }
  console.log(space, str);
  num--;
}
