//Give an example of using a callback function to handle an asynchronous operation in JavaScript (Use any open api to make a call)

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "74771420f3msh07a128181a1c514p187876jsn2ddbe1fa1537",
    "X-RapidAPI-Host": "random-word-api.p.rapidapi.com",
  },
};
const print = (error, result) => {
  if (error) console.log("Error Occured", error);
  else console.log(result);
};
const fetching = (callback) => {
  fetch("https://random-word-api.p.rapidapi.com/get_word", options) // fetching API
    .then((resolve) => {
      if (!resolve.ok)
        throw new Error(`Error Occured with Status Code ${resolve.status}`);
      else return resolve.json();
    }) //returns promise
    .then((result) => {
      callback(null, result);
    })
    .catch((error) => callback(error));
};
fetching(print);
