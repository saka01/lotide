const assertArraysEqual = function(firstArr,secondArr){
  if (firstArr.length === secondArr.length) {
    for (let i = 0; i < firstArr.length; i++) {
      if (firstArr[i]!== secondArr[i]) {
          return console.log(`❌❌❌ Assertion Failed: ${firstArr} !== ${secondArr}`);
      }      
  }
  return console.log(`✅✅✅ Assertion Passed: ${firstArr} === ${secondArr}`);
  }
  return console.log(`❌❌❌ Assertion Failed: ${firstArr} !== ${secondArr}`);
  
}

const without = function(array,remove){
  let result = []
  for (let i = 0; i < array.length; i++) {
      if (!remove.includes(array[i])) {
        result.push(array[i])
      }  
  }
  return result;
}



without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);