// Write a program to implement a Promise-based rate limiter, that limits the number of concurrent requests to a certain number

const Limiter = (count) =>
  new Promise((resolve, reject) => {
    if (count <= 3) resolve(`Promise for ${count} request`);
    else reject("Limit exceed");
  });

for (let val = 1; val < 8; val++) {
  Limiter(val)
    .then((response) => console.log(response))
    .catch((error) => console.log(error));
}
