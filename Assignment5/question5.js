//program flattenObject that takes an object with nested properties and returns a flat object with the nested properties transformed into dot-separated properties. The function should handle nested objects and arrays.

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
  let result = {};
  for (let i in obj) {
    if (typeof obj[i] === "object") {
      //if object then again recursive call and the returned answer is also object stored in temp
      let temp = flattenObject(obj[i]); 
      for (let j in temp) {
        result[i + "." + j] = temp[j];  // so variable temp has object which is iterated through forin loop and store answer in result object
      }
    } else {
      result[i] = obj[i]; // if typeof is not object then direct store key and values
    }
  }
  return result; //returning the obj
}
console.log(flattenObject(college));
