//program flattenObject that takes an object with nested properties and returns a flat object with the nested properties transformed into dot-separated properties. The function should handle nested objects and arrays.

const obj = {
  a: 1,
  b: { c: 2, d: [3, 4] },
};

const college = {
  collegeName: "GL Bajaj",
  year: 2024,
  courses: { Btech: ["IT", "CS", "Civil"] },
  address: {
    area: "Knowledge Park-2",
    city: "Greater Noida",
  },
};
let outuptObject = {};
function flattenObject(college, name) {
  for (key in college) {
    if (typeof college[key] == "object") {
      flattenObject(college[key], name + "." + key);
    } else {
      outuptObject[name + "." + key] = college[key];
    }
  }
}
flattenObject(college, "college");
console.log(outuptObject);
