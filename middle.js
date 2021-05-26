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

const middle = function(array) {
  const length = array.length;
  const low = 0;
  const high = length - 1;
  const middle = Math.floor((low + high) / 2);
  const newArr = [];
  if (length > 2) {
    if (length % 2 !== 0) {
      newArr.push(array[middle]);
      return newArr;
    } else {
      newArr.push(array[middle]);
      newArr.push(array[middle + 1]);
      return newArr;
    }
    
  } else {
    return newArr;
  }

};

assertArraysEqual(middle([1]), []); // => []
assertArraysEqual(middle([1, 2]), []); // => []
assertArraysEqual(middle([1, 2, 3]), [2]); // => [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => [3]
assertArraysEqual(middle([1, 2, 3, 4]), [2,3]); // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3,4]); // => [3, 4]

assertArraysEqual(middle([1]), []);