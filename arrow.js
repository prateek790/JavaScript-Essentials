// When to use it

// Good fit:

// Callbacks and array methods: map, filter, reduce, forEach
// Rule of thumb: use arrow functions for callbacks and anywhere you want to keep the surrounding this; use regular functions for object methods, constructors, and when you need dynamic this.

class Timer{
    constructor() {
        this.seconds = 0;
    }

    starts() {
        setInterval(() => {
            this.seconds++;
        },1000);
    }
}