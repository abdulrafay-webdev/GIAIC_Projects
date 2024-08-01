#!/usr/bin/env node

import inquirer from "inquirer";

const answers:{
    numberone:number,numbertwo:number,operator:string
} = await inquirer.prompt([
    {
        name:"numberone",
        type:"input",
        message:"enter first number"
    },
    {
        name:"operator",
        type:"list",
        choices:["+","-","*","/"],
        message:"select operation which you perform"
    },{
        name:"numbertwo",
        type:"input",
        message:"enter second number"
    }
]);

if(answers.numberone && answers.operator && answers.numbertwo){
    if(answers.operator==="+"){
        console.log(answers.numberone + answers.numbertwo);
    }
    else if(answers.operator==="-"){
        console.log(answers.numberone - answers.numbertwo);
    }
    else if(answers.operator==="*"){
        console.log(answers.numberone * answers.numbertwo);
    }else if(answers.operator==="/"){
        console.log(answers.numberone / answers.numbertwo);
    }
}
else{
    console.log("kindly submit data");
}