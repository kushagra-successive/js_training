let n = 50;
for (let i = 2; i <= n; i++) {
  let bool = false;

  for (let j = 2; j <= i / 2; j++) {
    if (i % j == 0) {
      bool = true;
      break;
    }
  }
  if (!bool) {
    console.log(i);
  }
}
