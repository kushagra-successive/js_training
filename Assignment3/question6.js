//program to display prime numbers from 1 to 50

let n = 50;
for (let i = 2; i <= n; i++) {
  //outer loop  runs upto 50 from 2
  let bool = true;

  for (let j = 2; j <= i / 2; j++) {
    //innerloop runs from 2 to half of the number
    if (i % j == 0) {
      bool = false; //if number divisble in between range,means not prime bool will false
      break;
    }
  }
  if (bool) {
    console.log(i);
  }
}
