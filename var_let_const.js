

var greet = function() {
    console.log("Hello");
}
greet();

// One-line interview answer:
// Function declarations are fully hoisted, whereas function expressions are not. In a function expression assigned to a var variable, only the variable declaration is hoisted and initialized with undefined. Therefore, calling it before the assignment results in a TypeError.

// One more important point: If you use let or const instead of var, calling the function before initialization results in a ReferenceError because of the Temporal Dead Zone (TDZ).