
function sum(fromN, toN) {
  // Sum all the values from fromN up to toN
  if (fromN === toN) {
    return fromN;
  }
 
  return toN + sum(fromN, toN - 1)
}

module.exports = sum;

// console.log(sum(1, 1));
// console.log(sum(0, 0));
// console.log(sum(5, 5));
// console.log(sum(0, 1));
// console.log(sum(1, 2));
// console.log(sum(3, 7));


