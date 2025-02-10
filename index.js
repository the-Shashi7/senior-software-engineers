const debounce = (fn, delay) => {
    let timeout;
    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            fn(...args);
        }, delay);
    }
}

const currying = (fn) => {
    let num = 9;
    return (...args) => {
        if(args.length === 0){
            return num;
        }
        return currying(fn);
    }
}

const throttle = (fn, delay) => {
    let timeout;
    return (...args) => {
        if(!timeout){
            fn(...args);
            timeout = setTimeout(() => {
                timeout = null;
            }, delay);
        }
    }
}


var x = 30;
const printXArrow =()=>{
    x = 20;
    console.log(x);
}

function printXFunction(){
    var x = 10;
    x = 10;
    console.log(x);
}

if(true){
    x = 40;
}

// console.log(x)
// printXArrow();
// printXFunction();
// console.log(x)
// 40
// 20
// 10
// 20

const print1toN = (num) => {
    for(var i = 1; i <= num; i++){
        (function print(y){
            setTimeout(() => {
                console.log(y);
            }, y * 1000);
        })(i) 
    }
}

// print1toN(5);
// let a = 10; //10
// let b = a++; //11
// let c = a++; //12
// let d = b++; //11
// console.log(a, b, c); //12, 11, 11

//functino declaration

//function statement && function declaration
function nameStatement(){
    console.log("Hello");
}
//function expression
const nameExpression = function(){
    console.log("Hello");
}
//arrow function
const nameArrow = () => {
    console.log("Hello");
}
//anonymous function : function without name and function where used as value
// function(){
//     console.log("Hello");
// }

//name function expression
const nameFunctionExpression = function name(){
    console.log("Hello");
}

//first class function/citizens : Ability to use function as value


console.log("start")
setTimeout(() => {
    console.log("Hello");
},0);

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Hello promise");
    },0);
})
promise.then((data) => {
    console.log(data);
})
console.log("end")