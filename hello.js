function square(x){
    return x * x;
}

function print(x){
    console.log(x);
}

print("Hello World")
print("Square of 109 is " + square(109))



const n=10;
let a=1;
let b=[1,2,a,"string",true,"01"]

const data = {
    key: "value",
    key1: 2,
    key2: a,
};

try
{
    console.log(data.key3.j)
}
catch(exceptionVar)
{
    console.log("error")
}

//


const onelinerjoke = require("one-liner-joke")

const cow=require("cowsay")

const joke=onelinerjoke.getRandomJoke();


console.log(
    cow.say({
        text: joke.body,
        e: "vv",
        T: "U"
    })
)

