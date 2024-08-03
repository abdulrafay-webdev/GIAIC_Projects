#!/usr/bin/env node


import inquirer from "inquirer";

interface anstype {
    userid:number,
    userpin:number,
    method:string,
    fast:number,
    withdraw:number
}
//take input from user
const answer : anstype =await inquirer.prompt([
    {
        name:"userid",
        type:"input",
        message:"Enter User ID"
    },
    {
        name:"userpin",
        type:"input",
        message:"Enter User PIN"
    },
    {
        name:"method",
        type:"list",
        choices:["fastcash","withdraw"],
        message:"Choose Payment Method"
    },
    {
        name:"fast",
        type:"list",
        choices:[500,1000,10000,20000,50000],
        message:"Select Cash",
        when(answer){
            return answer.method==="fastcash"
        }
    },
    {
        name:"withdraw",
        type:"input",
        message:"Enter Withdrawal Amount",
        when(answer){
            return answer.method==="withdraw"
        }
    }
])

//first we generate auto balance
if(answer.userid  && answer.userpin){
    const balance = Math.floor(Math.random()*100000);
    const remainingbalance=balance-answer.withdraw||balance-answer.fast
    if(balance>=answer.withdraw || balance>=answer.fast){
        if(answer.withdraw){
            console.log(`you've successfully transact ${answer.withdraw}`);
            console.log(`your remaining balance is ${remainingbalance}`);
            
        }
        if(answer.fast){
            console.log(`you've successfully transact ${answer.fast}`);
            console.log(`your remaining balance is ${remainingbalance}`);
        }
    }
    else{
        console.log(`your available balance is ${balance}`);
        console.log("you have insufficient balance"); 
    }
}
