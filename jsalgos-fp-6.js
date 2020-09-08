// The global variable
var bookList = [
  "The Hound of the Baskervilles",
  "On The Electrodynamics of Moving Bodies",
  "Philosophiæ Naturalis Principia Mathematica",
  "Disquisitiones Arithmeticae",
];

// Change code below this line
function add(localBookList, bookName) {
  var newBookList = [...localBookList];
  newBookList.push(bookName);
  return newBookList;

  // Change code above this line
}

// Change code below this line
function remove(localBookList, bookName) {
  var newerBookList = [...localBookList];
  var book_index = newerBookList.indexOf(bookName);
  if (book_index >= 0) {
    newerBookList.splice(book_index, 1);
    return newerBookList;

    // Change code above this line
  }
}

var newBookList = add(bookList, "A Brief History of Time");
console.log("new");
console.log(newBookList);
var newerBookList = remove(bookList, "On The Electrodynamics of Moving Bodies");
console.log("newer");
console.log(newerBookList);
var newestBookList = remove(
  add(bookList, "A Brief History of Time"),
  "On The Electrodynamics of Moving Bodies"
);
console.log("newest");
console.log(newestBookList);

console.log("old");
console.log(bookList);
