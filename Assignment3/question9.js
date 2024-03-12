//program to print fibonaaci series

function fibonacci(number) {
  if (number == 0 || number == 1) {
    return number;
  }
  return fibonacci(number - 1) + fibonacci(number - 2);
}

for (let i = 0; i <= 10; i++) {
  console.log(fibonacci(i));
}
