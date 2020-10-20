var funcname = function (var1) {
  //string
  return var1;
};

//overloading = multiple functions with same name but different
//string string
//string int
//int string

let arr = [1, 2, 3];
var funcname = function (arr) {
  arr.map((val) => console.log(val), 2, 3);

  class Car {
    constructor(brand) {
      this.carname = brand;
    }

    constructor(brand, wheels) {
      this.carname = brand;
      this.wheels = 3;
    }
  }

  car("porsche");
  car("porsche", 4);

  //functional programming vs object oriented programming

  //     for (let i = 0; i < arr.length; i++) {
  //     console.log(arr[i]);
  //   }
};

funcname(arr);
