const college = {
  collegeName: "GL Bajaj",
  year: 2024,
  courses: { Btech: ["IT", "CS", "Civil"] },
  address: {
    area: "Knowledge Park-2",
    city: "Greater Noida",
  },
};

function flattenObject(obj) {
  let ans = {};
  for (let i in obj) {
    if (typeof obj[i] === "object") {
      //if object then again recursive call and the returned answer is also object stored in temp
      let innerObject = flattenObject(obj[i]);
      for (let j in innerObject) {
        ans[i + "." + j] = innerObject[j]; // so variable temp has object which is iterated through forin loop and store answer in result object
      }
    } else {
      ans[i] = obj[i]; // if typeof is not object then direct store key and values
    }
  }
  return ans; //returning the obj
}
console.log(flattenObject(college));
