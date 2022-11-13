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

const cow=require("cowsay")


console.log(
    cow.say({
        text: "Ayush is doing a workshop",
        e: "vv",
        T: "U"
    })
)