function convertHTML(str) {
  let arr = str.split("");

  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case "&":
        arr[i] = "&amp;";
        break;
      case "<":
        arr[i] = "&lt;";
        break;
      case ">":
        arr[i] = "&gt;";
        break;

      case "'":
        arr[i] = "&apos;";
        break;
      case '"':
        arr[i] = "&quot;";
        break;
    }
  }

  return arr.join("");
}

console.log(convertHTML("<>"));
