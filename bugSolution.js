function foo(x) {
  // Check if x is null or undefined
  if (x === null || x === undefined) {
    return 0; 
  }

  // Check if x is an array or string before accessing length
  if (Array.isArray(x) || typeof x === 'string') {
    return x.length;
  } else {
    return 0; // Or throw an error, depending on your needs
  }
}

console.log(foo([1, 2, 3])); // 3
console.log(foo(null)); // 0
console.log(foo(undefined)); // 0
console.log(foo({})); // 0
console.log(foo("hello")); //5