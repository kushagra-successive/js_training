let base = function (another) {

      console.log("Moving to another function :");
      another("Kushagra");
  }
  let another = function () {
      console.log(`I am in another function`);
  }
  base(another,10);
  