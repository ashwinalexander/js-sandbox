// //function that takes in an array of strings and returns the most commonly occuring string
// //input: an array of strings
// //output: the first most commonly occuring string

// //function algorithm:
// // loop through every string element in the array  ("aaa", "bbbb","ccc", "aaa", "ccc")
// // compare each string with all the prior strings in the array
// // // if we find a match, push that string into a second array

// // function mostCommonlyOccuring(exampleArray) {
// //   let frequencyCounter = 0;
// //   let newArr = [];

// //   for (let i = 0; i < exampleArray.length; i++) {
// //     for (let j = 0; j < exampleArray.length; j++) {
// //       if (exampleArray[i] === exampleArray[j]) {
// //         frequencyCounter++;
// //       }
// //       newArr.push([exampleArray[j], frequencyCounter]);
// //     }
// //   }

// //   console.log(newArr);
// // }

// // mostCommonlyOccuring(["ddd", "aaa", "bbbb", "cc", "aaa", "ccc"]);

// // function printEveryThreeSeconds(arr) {
// //   for (let i = 0; i < arr.length; i++) {
// //     setTimeout((blah = (i) => console.log(arr[i])), 3000);
// //   }
// // }

// // printEveryThreeSeconds([1, 2, 3, 4]);

// // function calculateScore(word) {
// //   const lib = {
// //     a: 1,
// //     e: 1,
// //     i: 1,
// //     o: 1,
// //     n: 1,
// //     r: 1,
// //     t: 1,
// //     l: 1,
// //     s: 1,
// //     u: 1,
// //   };

// //   word = word.toLowerCase();
// //   let arr = [...word];
// //   let counter = 0;
// //   for (let i = 0; i < arr.length; i++) {
// //     switch (arr[i]) {
// //       case "e":
// //       case "a":
// //       case "i":
// //       case "o":
// //       case "n":
// //       case "r":
// //       case "t":
// //       case "l":
// //       case "s":
// //       case "u":
// //         counter = counter + 1;
// //         break;
// //       case "d":
// //       case "g":
// //         counter = counter + 2;
// //         break;
// //       case "b":
// //       case "c":
// //       case "m":
// //       case "p":
// //         counter = counter + 3;
// //         break;
// //       case "f":
// //       case "h":
// //       case "v":
// //       case "w":
// //       case "y":
// //         counter = counter + 4;
// //         break;
// //       case "k":
// //         counter = counter + 5;
// //         break;
// //       case "j":
// //       case "x":
// //         counter = counter + 8;
// //         break;
// //       case "z":
// //       case "q":
// //         counter = counter + 10;
// //         break;
// //     }
// //   }

// //   return counter;
// // }

// // console.log(calculateScore("quaGmire"));

// const iceCreams = [
//   {
//     name: "Caramel Chocolate Cheesecake",
//     description:
//       "Caramel Cheesecake Ice Cream with Graham Cracker-Covered Cheesecake Truffles & Chocolate Cookie Swirls",
//     story:
//       "In your cheesecake dreams, is it like you’re spooning through a world of caramel cheesecake ice cream swirled with chocolate cookies in a wonderland of truffles filled with cheesecake? Hello? You can wake up now…",
//     sourcing_values: [
//       "Non-GMO",
//       "Cage-Free Eggs",
//       "Fairtrade",
//       "Responsibly Sourced Packaging",
//       "Caring Dairy",
//     ],
//     ingredients: [
//       "cream",
//       "skim milk",
//       "water",
//       "liquid sugar (sugar",
//       "water)",
//       "sugar",
//       "corn syrup",
//       "canola oil",
//       "cream cheese (pasteurized milk",
//       "cream",
//       "cheese cultures",
//       "salt",
//       "carob bean gum)",
//       "coconut oil",
//       "egg yolks",
//       "wheat flour",
//       "dried cane syrup",
//       "soybean oil",
//       "graham flour",
//       "eggs",
//       "cocoa (processed with alkali)",
//       "natural flavors",
//       "cocoa",
//       "guar gum",
//       "butteroil",
//       "milk protein concentrate",
//       "corn starch",
//       "salt",
//       "soy lecithin",
//       "tapioca starch",
//       "pectin",
//       "caramelized sugar syrup",
//       "baking soda",
//       "molasses",
//       "honey",
//       "carrageenan",
//       "vanilla extract",
//     ],
//     allergy_info: "contains milk, eggs, wheat and soy",
//     dietary_certifications: "Kosher",
//     productId: "2190",
//   },
//   {
//     name: "Chillin' the Roast™",
//     description:
//       "Cold Brew Coffee Ice Cream with Chocolate Cookie-Covered Coffee Liqueur Truffles & Fudge Swirls",
//     story:
//       "Our cold brew coffee ice cream not only delivers a chillacious blast of creamy caffeination, it’s also loaded with enough coffee liqueur-filled, cookie crumble-covered truffles to fuel a truffolution.",
//     sourcing_values: [
//       "Non-GMO",
//       "Cage-Free Eggs",
//       "Fairtrade",
//       "Responsibly Sourced Packaging",
//       "Caring Dairy",
//     ],
//     ingredients: [
//       "cream",
//       "skim milk",
//       "liquid sugar (sugar",
//       "water)",
//       "water",
//       "sugar",
//       "coconut oil",
//       "egg yolks",
//       "butter (cream",
//       "salt)",
//       "coffee",
//       "wheat flour",
//       "milk protein concentrate",
//       "cocoa (processed with alkali)",
//       "soybean oil",
//       "guar gum",
//       "natural flavor",
//       "salt",
//       "corn starch",
//       "canola oil",
//       "rum",
//       "soy lecithin",
//       "chocolate",
//       "baking soda",
//       "carrageenan",
//     ],
//     allergy_info: "contains milk, eggs, wheat and soy",
//     dietary_certifications: "Kosher",
//     productId: "2189",
//   },
//   {
//     name: "Chocolate Shake It™",
//     description:
//       "Chocolate Malt Milkshake Ice Cream with Chocolate Cookie-Covered Fudge Truffles & Marshmallow Swirls",
//     story:
//       "For those who prefer their ice cream shaken, swirled, and truffled, here’s a chocolate malt milkshake and marshmallow creation we truffled up with euphoric morsels of cookie crumble-covered fudge.",
//     sourcing_values: [
//       "Non-GMO",
//       "Cage-Free Eggs",
//       "Fairtrade",
//       "Responsibly Sourced Packaging",
//       "Caring Dairy",
//     ],
//     ingredients: [
//       "cream",
//       "skim milk",
//       "liquid sugar (sugar",
//       "water)",
//       "water",
//       "corn syrup",
//       "sugar",
//       "coconut oil",
//       "egg yolks",
//       "cocoa (processed with alkali)",
//       "corn starch",
//       "wheat flour",
//       "barley malt",
//       "vanilla extract",
//       "soybean oil",
//       "eggs",
//       "egg whites",
//       "milk",
//       "guar gum",
//       "salt",
//       "natural flavors",
//       "soy lecithin",
//       "canola oil",
//       "pectin",
//       "baking soda",
//       "enzymes",
//       "carrageenan",
//     ],
//     allergy_info: "contains milk, eggs, wheat and soy",
//     dietary_certifications: "Kosher",
//     productId: "2188",
//   },
//   {
//     name: "One Sweet World",
//     description:
//       "Coffee Caramel Ice Creams with Fudge Chunks & Swirls of Marshmallow & Salted Caramel",
//     story:
//       "At Ben & Jerry’s, we believe the world is sweetest when we stand together as one. That’s why we’re asking you to join us in digging deeper to understand issues of racial justice in America. Learn more and take action at benjerry.com/digdeeper",
//     sourcing_values: [
//       "Non-GMO",
//       "Cage-Free Eggs",
//       "Fairtrade",
//       "Responsibly Sourced Packaging",
//       "Caring Dairy",
//     ],
//     ingredients: [
//       "cream",
//       "skim milk",
//       "corn syrup",
//       "water",
//       "liquid sugar (sugar",
//       "water)",
//       "sugar",
//       "coconut oil",
//       "coffee extract",
//       "egg yolks",
//       "cocoa (processed with alkali)",
//       "butter (cream",
//       "salt)",
//       "egg whites",
//       "caramelized sugar syrup",
//       "cocoa",
//       "sea salt",
//       "natural flavor",
//       "pectin",
//       "carrageenan",
//       "guar gum",
//       "baking soda",
//       "soy lecithin",
//       "vanilla extract",
//       "salt",
//       "milk",
//     ],
//     allergy_info: "",
//     dietary_certifications: "Kosher",
//     productId: "2139",
//   },
//   {
//     name: "Americone Dream®",
//     description:
//       "Vanilla Ice Cream with Fudge-Covered Waffle Cone Pieces & a Caramel Swirl",
//     story:
//       "Founded in fudge-covered waffle cones, this caramel-swirled concoction is the only flavor that gets a s'cream of approval from The Late Show host, Stephen Colbert. What's sweeter is this flavor supports charitable causes through The Stephen Colbert AmeriCone Dream Fund.",
//     sourcing_values: [],
//     ingredients: [""],
//     allergy_info: "",
//     dietary_certifications: "",
//     productId: "641",
//   },
//   {
//     name: "Banana Split",
//     description:
//       "Banana & Strawberry Ice Creams with Walnuts, Fudge Chunks & a Fudge Swirl",
//     story:
//       "We turned the classic ice cream parlor sundae you've always loved into the at-home flavor creation you've always wanted. Enjoy!",
//     sourcing_values: [
//       "Non-GMO",
//       "Cage-Free Eggs",
//       "Fairtrade",
//       "Responsibly Sourced Packaging",
//       "Caring Dairy",
//     ],
//     ingredients: [
//       "cream",
//       "skim milk",
//       "water",
//       "liquid sugar (sugar",
//       "water)",
//       "sugar",
//       "strawberries",
//       "strawberry puree",
//       "walnuts",
//       "egg yolks",
//       "bananas",
//       "butter (cream",
//       "salt)",
//       "coconut oil",
//       "cocoa processed with alkali",
//       "chocolate liquor",
//       "cocoa powder",
//       "lemon juice concentrate",
//       "natural flavors",
//       "guar gum",
//       "pectin",
//       "milkfat",
//       "carrageenan",
//       "soy lecithin",
//       "vanilla extract",
//     ],
//     allergy_info: "may contain other tree nuts",
//     dietary_certifications: "Kosher",
//     productId: "602",
//   },
//   {
//     name: "Blondie Ambition™",
//     description:
//       "Buttery Brown Sugar Ice Cream with Blonde Brownies and Butterscotch Toffee Flakes",
//     story:
//       "What makes Ben & Jerry's so euphoric? Some say it's the legendary creamy-richness of our flavor creations. Others say it's the tastebud-boggling combinations of spoon-bending chunks & perfect swirls. We say, \"Enjoy!\"",
//     sourcing_values: [
//       "Non-GMO",
//       "Cage-Free Eggs",
//       "Fairtrade",
//       "Responsibly Sourced Packaging",
//       "Caring Dairy",
//     ],
//     ingredients: [
//       "cream",
//       "skim milk",
//       "water",
//       "liquid sugar (sugar",
//       "water)",
//       "brown sugar",
//       "egg yolks",
//       "dried cane syrup",
//       "wheat flour",
//       "eggs",
//       "coconut oil",
//       "sugar",
//       "butter (cream",
//       "salt)",
//       "milkfat",
//       "soybean oil",
//       "corn syrup",
//       "salt",
//       "guar gum",
//       "vanilla extract",
//       "corn starch",
//       "monocalcium phosphate",
//       "sodium acid pyrophosphate",
//       "sodium bicarbonate",
//       "cocoa",
//       "molasses",
//       "natural flavor",
//       "paprika extract (color)",
//       "soy lecithin",
//       "carrageenan",
//       "lemon juice concentrate",
//     ],
//     allergy_info: "",
//     dietary_certifications: "",
//     productId: "1381",
//   },
//   {
//     name: "Boom Chocolatta™ Cookie Core",
//     description:
//       "Mocha & Caramel Ice Creams with Chocolate Cookies, Fudge Flakes & a Chocolate Cookie Core",
//     story:
//       "As you slam dunk your spoon through creamy mocha & caramel to celebrate the epic chocolate cookie-spread core, your technique may not be perfect, but the victory’s perfectly delicious.",
//     sourcing_values: [
//       "Non-GMO",
//       "Cage-Free Eggs",
//       "Fairtrade",
//       "Responsibly Sourced Packaging",
//       "Caring Dairy",
//     ],
//     ingredients: [
//       "cream",
//       "skim milk",
//       "liquid sugar (sugar",
//       "water)",
//       "water",
//       "sugar",
//       "soybean oil",
//       "cocoa (processed with alkali)",
//       "egg yolks",
//       "butter (cream",
//       "salt)",
//       "coffee extract",
//       "corn syrup",
//       "rice flour",
//       "potato flour",
//       "wheat flour",
//       "coconut oil",
//       "brown sugar",
//       "vanilla extract",
//       "salt",
//       "sodium bicarbonate",
//       "natural flavor",
//       "cocoa powder",
//       "soy lecithin",
//       "eggs",
//       "chocolate liquor",
//       "cocoa butter",
//       "milk",
//       "whey protein concentrate",
//       "guar gum",
//       "carrageenan",
//       "milkfat",
//     ],
//     allergy_info: "",
//     dietary_certifications: "",
//     productId: "1271",
//   },
//   {
//     name: "Bourbon Pecan Pie",
//     description:
//       "Buttery Bourbon Ice Cream with Pecans, Shortbread Cookie Pieces & a Whiskey Caramel Swirl",
//     story:
//       "Not long ago we scoop-toured through Texas asking you to elect the best of two Texas-inspired flavors. Thanks to you this bourbon-y whirl of pecans and cookies wrapped in whiskey-kissed caramel is now available Tex-clusively!",
//     sourcing_values: [
//       "Non-GMO",
//       "Cage-Free Eggs",
//       "Fairtrade",
//       "Responsibly Sourced Packaging",
//       "Caring Dairy",
//     ],
//     ingredients: [
//       "cream",
//       "skim milk",
//       "liquid sugar (sugar",
//       "water)",
//       "water",
//       "corn syrup",
//       "pecans",
//       "butter (cream",
//       "salt)",
//       "wheat flour",
//       "egg yolks",
//       "sugar",
//       "dried cane syrup",
//       "whiskey",
//       "dry malt extract (barley)",
//       "soybean oil",
//       "salt",
//       "eggs",
//       "caramel color",
//       "peanut oil",
//       "guar gum",
//       "baking soda",
//       "carrageenan",
//       "soy lecithin may contain other tree nuts",
//     ],
//     allergy_info: "may contain other tree nuts",
//     dietary_certifications: "Kosher",
//     productId: "1490",
//   },
//   {
//     name: "Brewed to Matter™",
//     description: "Coffee Ice Cream with Fudge Chunks & a Brownie Batter Swirl",
//     story:
//       "We're thrilled to add this made-to-matter, brownie batter-swirled batchful of coffee awesomeness to the Ben & Jerry's family of flavors. It packs a powerful pintful of goodness that's guaranteed to amaze you with every consciously concocted bite.",
//     sourcing_values: [
//       "Non-GMO",
//       "Cage-Free Eggs",
//       "Fairtrade",
//       "Responsibly Sourced Packaging",
//       "Caring Dairy",
//     ],
//     ingredients: [
//       "cream",
//       "skim milk",
//       "liquid sugar (sugar",
//       "water)",
//       "water",
//       "sugar",
//       "coffee extract",
//       "coconut oil",
//       "egg yolks",
//       "dried cane syrup",
//       "cocoa (processed with alkali)",
//       "cocoa",
//       "butter (cream",
//       "salt)",
//       "corn syrup",
//       "wheat flour",
//       "chocolate liquor",
//       "canola oil",
//       "carrageenan",
//       "guar gum",
//       "salt",
//       "soy lecithin",
//       "natural flavor",
//       "vanilla extract",
//       "milk fat",
//       "sodium bicarbonate",
//     ],
//     allergy_info: "",
//     dietary_certifications: "",
//     productId: "1379",
//   },
//   {
//     name: "Brownie Batter Core",
//     description:
//       "Chocolate & Vanilla Ice Creams with Fudge Brownies & a Brownie Batter Core",
//     story:
//       "Spooning your way to brownie nirvana? Smack dab in the middle of this brownie-chunk-filled ice cream there's a core of unbaked brownie batter calling your name. No, really. We heard it.",
//     sourcing_values: [
//       "Non-GMO",
//       "Cage-Free Eggs",
//       "Fairtrade",
//       "Responsibly Sourced Packaging",
//       "Greyston Brownies",
//       "Caring Dairy",
//     ],
//     ingredients: [
//       "cream",
//       "liquid sugar (sugar",
//       "water)",
//       "skim milk",
//       "water",
//       "dried cane syrup",
//       "sugar",
//       "cocoa (pressed with alkali)",
//       "egg yolks",
//       "wheat flour",
//       "butter (cream",
//       "salt)",
//       "corn syrup",
//       "cocoa",
//       "cocoa powder",
//       "chocolate liquor",
//       "soybean oil",
//       "invert sugar",
//       "coconut oil",
//       "vanilla extract",
//       "eggs",
//       "canola oil",
//       "salt",
//       "carrageenan",
//       "guar gum",
//       "egg whites",
//       "natural flavor",
//       "soy lecithin",
//       "baking soda",
//       "malted barley flour",
//     ],
//     allergy_info: "",
//     dietary_certifications: "Kosher",
//     productId: "1515",
//   },
// ];

// //console.log(iceCreams);

// function computeCocoa(iceCreams) {
//   iceCreams.filter(iceCreams => iceCreams.)
// }

// computeCocoa(iceCreams);

function computeCoolString(arr) {
  let maxVal = 0;
  let highString = "";

  for (let i = 0; i < arr.length; i++) {
    let counter = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        counter++;
      }
    }
    if (counter > maxVal) {
      maxVal = counter;
      highString = arr[i];
    }
  }

  return highString;
}

console.log(
  computeCoolString([
    "aa",
    "bbb",
    "cc",
    "dd",
    "aa",
    "aa",
    "bb",
    "aa",
    "aa",
    "Aa",
  ])
);
