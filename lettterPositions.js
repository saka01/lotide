const assertArraysEqual = function(firstArr,secondArr) {
  if (firstArr.length === secondArr.length) {
    for (let i = 0; i < firstArr.length; i++) {
      if (firstArr[i] !== secondArr[i]) {
        return console.log(`❌❌❌ Assertion Failed: ${firstArr} !== ${secondArr}`);
      }
    }
    return console.log(`✅✅✅ Assertion Passed: ${firstArr} === ${secondArr}`);
  }
  return console.log(`❌❌❌ Assertion Failed: ${firstArr} !== ${secondArr}`);
  
};

const letterPositions = function(sentence) {
  const results = {};


  return results;
};

assertArraysEqual(letterPositions("hello").e, [1]);
