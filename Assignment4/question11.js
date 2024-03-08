//program to sort an array (bubble sort)

let array = [3, 19, 22, 0, 1, 7, 4];
for (let i = 0; i < array.length - 1; i++) {
  for (let j = 0; j < array.length - i - 1; j++) {
    if (array[j] > array[j + 1]) {
      let temporaryvar = array[j];
      array[j] = array[j + 1];
      array[j + 1] = temporaryvar;
    }
  }
}
console.log(array);
