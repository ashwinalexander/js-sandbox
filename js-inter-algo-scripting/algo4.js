function whatIsInAName(collection, source) {
  var arr = [];

  // Only change code below this line
  let sourceKeys = Object.keys(source);

  function filterItems(val) {
    for (let i = 0; i < sourceKeys.length; i++) {
      if (
        !(
          val.hasOwnProperty(sourceKeys[i]) &&
          val[sourceKeys[i]] === source[sourceKeys[i]]
        )
      ) {
        return false;
      }
    }
    return true;
  }

  arr = collection.filter(filterItems);

  // Only change code above this line

  return arr;
}

whatIsInAName([{ a: 1, b: 2, c: 3 }], { a: 1, b: 9999, c: 3 });
