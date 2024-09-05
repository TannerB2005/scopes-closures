console.groupCollapsed("Exercise 1");
console.log("These variables are not accessible outside the function, you must call them inside the function");
function outerFunction() {
    let outerVar = "I'm outside!";

    function innerFunction() {
        let innerVar = "I'm inside!";
        console.log(outerVar); // Can we access outerVar?
        console.log(innerVar); // Can we access innerVar?
        console.log("Both variables are accessible here");
    }

    innerFunction();
}

outerFunction();
console.log("The variable outerVar is accessible here but the inner var is not accessible");
console.groupEnd();



console.groupCollapsed("Exercise 2 and 3");
function mainFunction() {
    let hoistedVar = "I'm hoisted!"; //call hoistedFunction here
    console.log(hoistedVar);
}

mainFunction();

if (true) {
    let hoistedVar = "I'm a returned value!";
    console.log(hoistedVar)
}
console.groupEnd();



console.groupCollapsed("Exercise 4");
// Declare a global variable here
let globalVar = "I'm global!";

function modifyGlobal() {
    globalVar = "I'm modified!";
}

function localScopeTest() {
    // Declare a local variable with the same name as the global variable
    let globalVar = " this modifies modifyGlobal";
    console.log(globalVar)
}

// Call both functions here
localScopeTest();
modifyGlobal();

console.groupEnd();



console.groupCollapsed("Exercise 5");
function functionFactory(param) {
    return function () {
        console.log(param);
    }
}

// Create an instance of the inner function by invoking functionFactory with a parameter
let innerFunction = functionFactory("I'm a parameter!");
innerFunction(); // Should print "I'm a parameter!"
console.groupEnd();



console.groupCollapsed("Exercise 6");
function hoistingTest() {
    // Try printing a variable here
    console.log(`${hoistedVar}`);
    // Declare the variable after the console.log
    var hoistedVar = "I'm hoisted!";
}
console.log("Calling hoistingTest results in a undefined term because of hoisting, if there was no hoist it would result in a reference error");
hoistingTest();
console.groupEnd();


console.groupCollapsed("Exercise 7");
function setupCounter() {
    let counter = 0;
    return function () {
        return counter++;
    }
}
const incrementCounter = setupCounter();
console.log(incrementCounter()); // Should print 0
console.log(incrementCounter()); // Should print 1
console.log(incrementCounter()); // Should print 2
console.groupEnd();




console.groupCollapsed("Exercise 8");

const counter = (function () {
    let privateCounter = 0;

    function changeBy(val) {
        privateCounter += val;
        if (privateCounter === 10) {
            counter.reset();
        }
    }

    return {
        increment() {
            changeBy(1);
        },

        decrement() {
            changeBy(-1);
        },

        reset() {
            privateCounter = 0;
        },

        value() {
            return privateCounter;
        },
    };
})();


console.log(counter.value()); // Should print 0
counter.increment();
console.log(counter.value()); // Should print 1
counter.decrement();
console.log(counter.value()); // Should print 0
counter.increment();
console.log(counter.value()); // Should print 0
counter.increment();
counter.increment();
counter.increment();
counter.increment();
counter.increment();
counter.increment();
counter.increment();
counter.increment();
counter.increment();
counter.increment();
counter.increment();
console.log(counter.value()); // Should print 2, it resets after 10 increments

console.groupEnd();



console.groupCollapsed("Exercise 9");

// Define a global variable
let globalVAR = 10;

// Function to modify a global variable
function modifyGlobal2() {
    globalVAR = 20;
    console.log("Global variable modified to:", globalVAR);
}

// Function to try to modify a local variable before declaration
function localScopeTest() {
    // Trying to modify a local variable before declaration
    // This will result in a ReferenceError
    // localVar = 5; // Uncommenting this line will result in a ReferenceError

    // Declaring and initializing the local variable after attempting to modify it
    let localVAR = 5;
    console.log("Local variable value:", localVAR);
}

// Function to demonstrate closures
function outerFunction2() {
    let outerVar2 = 100;

    // Factory function returning another function using closures
    function innerFunction2() {
        console.log("Accessing outer variable from inner function:", outerVar2);
    }

    return innerFunction2;
}

// Example of how the local scope of the outer function is preserved for the inner function through closures
const innerFunction2 = outerFunction2();
innerFunction2();

console.groupEnd();
