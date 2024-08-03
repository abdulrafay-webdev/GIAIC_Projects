#!/usr/bin/env node

import inquirer from "inquirer";

let convert = {
    "pkr" : {
        "pkr":1,
        "usd":0.0036,
        "ryl":0.014
    },
    "usd" : {
        "pkr":275.98,
        "usd":1,
        "ryl":3.75
    },
    "ryl" : {
        "pkr":73.52,
        "usd":0.27,
        "ryl":1
    }
}
const answer:{
    from:"pkr"|"usd"|"ryl",
    to:"pkr"|"usd"|"ryl",
    amount:number
} = await inquirer.prompt([
    {
        name:"from",
        type:"list",
        choices:["pkr","usd","ryl"],
        message:"select currency"
    },
    {
        name:"to",
        type:"list",
        choices:["pkr","usd","ryl"],
        message:"select converted currency"
    },
    {
        name:"amount",
        type:"input",
        choices:["pkr","usd","ryl"],
        message:"enter amount"
    }
])

const {from ,to ,amount}=answer

if(from && to && amount){
    const result = convert[from][to]*amount
    console.log(`your converted result is ${result}`);

}
else{
    "invalid input"
}