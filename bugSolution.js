function myFunc(a, b) {
  if (a === null || b === null) {
    // Throw an error or return a specific value to indicate an issue instead of silently returning 0.
    throw new Error('Null values are not allowed.'); 
    // Or return NaN (Not a Number):
    // return NaN; 
  }
  return a + b;
}

console.log(myFunc(5, 5));    // Output: 10

try {
  console.log(myFunc(null, 5)); //Throws an error
} catch (e) {
  console.error("Error: ", e.message);
}
