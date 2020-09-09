// Only change code below this line
function urlSlug(title) {
  return title
    .trim()
    .toLowerCase()
    .split(/\W/)
    .filter((element) => element.length > 0)
    .join("-");
}
// Only change code above this line

console.log(urlSlug(" Winter Is      Coming"));
