//Create a function that fetches data from multiple APIs in parallel and then performs some operation on the combined data, using async/await

const fetchAll = async () => {
  const funct1 = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
    const data = await res.json();
    return data;
  };

  const funct2 = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users/3");
    const data = await res.json();
    return data;
  };

  const funct3 = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users/5");
    const data = await res.json();
    return data;
  };
  let res = await Promise.all([funct1(), funct2(), funct3()]);
  return res;
};
fetchAll().then((res) => {
  let newString = "";
  for (let user of res) {
    newString += user.username + "-";
  }

  console.log("Answer Returned value : ", newString + "All are friends");
});
