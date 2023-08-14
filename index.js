function hasTargetSum(array, target) {
  for (let i=0; i < array.length; i++) {
    let complement = target - array[i];
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] === complement) {
        return true;
      }
    }
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  need to compare the values to see if they match the second parameter
  for each item in the array, add another item in the array to see if it is equal to the second parameter

  ***** after wathing the video, the solving for by subtracting and looking for what you need seems better
  for each number in the array, subtract it from the second parameter and make it a new variable
  look to see if the array has a value equal to the new value.
  if not, go to the next item in the array
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
