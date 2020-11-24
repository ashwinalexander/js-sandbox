strs = ["flower","flow","flight"] 
let longestCommonPrefix = function(strs) {
      newArray = [];
      for (let i = 0; i < strs.length; i++) {
        let spreadWord = [...strs[i]]
        // console.log(spreadWord)
        newArray.push(spreadWord);
      }
      let output = " ";
      for (let i = 0; i < newArray[0].length; i++) {
        // ["f","l","o","w","e","r"],
        // ["f","l","o","w"],
        // ["f","l","i","g","h","t"]
        for (let j = 1; j < newArray.length; j++) {
        // ["f","l","o","w","e","r"],
        // ["f","l","o","w"],
        // ["f","l","i","g","h","t"]
          if (newArray[0][i] !== newArray[j][i]) {
            return output;
            } else {
            output = output + newArray[0][i];
          };
        };
        console.log(output)
      };
      return output;
    };
  longestCommonPrefix(strs);