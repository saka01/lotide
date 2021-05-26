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


// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
// assertEqual(eqArrays([1, 2, 3], []), true); // => should FAIL

console.log(eqArrays([1, 2, 3], [1, 2, 3])) // => true 
console.log(eqArrays([1, 2, 3], [3, 2, 1])) // => false



eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false