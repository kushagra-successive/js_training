//Create a function that performs multiple asynchronous operations in parallel using async/await and waits for all of them to complete before returning the results.

const funct = async () => {
  const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise1");
    }, 2000);
  });

  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise2");
    }, 1000);
  });

  const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise3");
    }, 3000);
  });

  return Promise.all([promise1, promise2, promise3]);
};

funct().then((res) => console.log(res));
