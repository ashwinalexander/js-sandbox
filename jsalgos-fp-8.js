// The global variable
var s = [23, 65, 98, 5];

Array.prototype.myMap = function (callback) {
  var newArray = [];
  // Only change code below this line
  for (i = 0; i < this.length; i++) {
    newArray.push(callback(this[i]));
  }
  // Only change code above this line
  console.log(newArray);
  return newArray;
};

var new_s = s.myMap(function (item) {
  return item * 2;
});
