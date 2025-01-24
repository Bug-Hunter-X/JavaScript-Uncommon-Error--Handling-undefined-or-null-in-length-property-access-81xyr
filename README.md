# JavaScript Uncommon Error: Handling undefined or null in length property access

This repository demonstrates a common yet easily overlooked error in JavaScript related to accessing the `length` property of objects that may not have it defined (e.g., `undefined`, `null`, or objects without a `length` property).  The example shows a function `foo` that attempts to access the `length` property directly without proper error handling.

## Bug Description

The bug occurs when the input to the `foo` function is not an array or a string, as the `length` property is not defined for all object types.  Trying to access `length` on `undefined`, `null`, or non-array/non-string objects results in a runtime error.

## How to Reproduce

1. Clone this repository.
2. Open `bug.js`.
3. Run the code using a JavaScript runtime (e.g., Node.js).
4. Observe the error messages when `foo` is called with `undefined` or an object that doesn't have a `length` property.

## Solution

The `bugSolution.js` file demonstrates how to handle this error using explicit checks for `undefined` and `null`, as well as checking the type of the input before attempting to access the `length` property.
