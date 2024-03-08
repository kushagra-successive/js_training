//program to display following output as shown in figure

/*
1
2 3
4 5 6
7 8 9 10
*/

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

/*
1
2 2
3 3 3
4 4 4 4
*/

for (let row = 0; row < 4; row++) {
  let str = " ";
  for (let column = 0; column < row + 1; column++) {
    str += row + 1 + " ";
  }
  console.log(str);
}

console.log();

/*
1 2 3 4 5
1 2 3 4
1 2 3
1 2
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5
*/

//for first half of the given pattern

let newnum = 5; // newnum for size
for (let row = 0; row < 5; row++) {
  let str = " "; //this string add new elemnet everytime in single line
  for (let column = 0; column < newnum; column++) {
    str += column + 1 + " ";
  }
  console.log(str);
  newnum--; //decremnet according to columns
}
//for second half of the given pattern
for (let row = 0; row < 5; row++) {
  let str = " ";
  for (let column = 0; column < row + 1; column++) {
    str += column + 1 + " ";
  }
  if (row != 0) console.log(str);
  //this time we don't want to print 1 again becasuse already printed
}
