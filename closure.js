// A closure is created when a function retain access to variable from its outer lexical scope, even after the outer function has finished executing. 


// function outer() {
//     let count = 0;

//         return function inner() {
//         count++;
//         console.log(count);
//     };
// }

// const counter = outer();

// counter();
// counter();
// counter();

// let globalVar = "Global";            // 1. Global scope

// function outer() {
//   let outerVar = "Outer";            // 2. Lexical (parent) scope

//   return function inner() {
//     let innerVar = "Inner";          // 3. Local scope
//     console.log(globalVar, outerVar, innerVar);
//   };
// }

// const fn = outer();
// fn(); // Global Outer Inner


// A closure is a combination of a function and its lexical environment. 
// In JavaScript, an inner function retains access to variables from its outer lexical scope even after the outer function has finished execution. 
// Closures are useful for data privacy, maintaining state, callbacks, event handlers, and function factories.

// Remember this one sentence
// Closure = Function + Access to its outer lexical environment.

// And remember: a closure does not necessarily copy the variable's value. It retains access to the variable's binding, so it can observe changes to that variable.

//Bank Account Example

function createBalanceAccount(initialBalance){
    let balance = initialBalance;

    return{
        deposit(amount) {
            balance = balance+amount;
            console.log("Deposite:",amount);
        },

        withdraw(amount){
            if(amount <= balance){
                balance -= amount;
                console.log("Withdraw:", amount);
            }
            else{
                console.log("Insufficient balance");
            }
        },

        getBalance(){
            return balance;
        }
    };
}

const account = createBalanceAccount(1000)

account.deposit(500);
account.withdraw(10);

console.log(account.getBalance());

// example 1 with var
for(var i = 1; i<=3;i++){
    setTimeout(function () {
        console.log(i);
    },1000);
}


// example 2 with let

for(let i = 1; i<=3; i++){
    setTimeout(function () {
        console.log(i);
    },1000);
}


