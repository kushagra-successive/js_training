// program to iterate over object

const userDetails = {
  name: "Kushagra Bajpai",
  age: 23,
  favFood: ["Paneer", "Noodles", "Shakes"],
};
for (let key in userDetails) {
  console.log(userDetails[key]);
}
