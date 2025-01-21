# Unexpected Null Handling in JavaScript Function

This repository demonstrates a subtle bug in JavaScript related to unexpected null handling in a function.

The `bug.js` file contains the problematic code. The function `myFunc` handles null values by returning 0, but this could lead to unexpected behaviour if the calling function expects a numerical result.

The `bugSolution.js` file provides a potential solution.