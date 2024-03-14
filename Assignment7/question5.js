// Write a program to implement a Promise-based task queue, that processes tasks in a specified order, with a specified concurrency limit

const Queue = (i, limit) => {
  return new Promise((resolve, reject) => {
    if (i <= limit) resolve(`promise resolved for request${i}`);
    else reject("limit exceeded now");
  });
};

const limit = 5;
const size = 7;
for (let i = 1; i <= size; i++) {
  Queue(i, limit)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
}
