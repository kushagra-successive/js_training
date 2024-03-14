// Implement a function that returns a resolved Promise after a specified delay using async/await.

const funct = async () => {
  const pro = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise Resolved succesfully");
    });
  }, 2000);
  return pro;
};
funct().then((val) => console.log(val));
