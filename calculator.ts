#! /usr/bin/node env
import inquirer from "inquirer";



type answer={
    firstnumber:string,
    operation:"+"|"-"|"x"|"/"|"^"|"%",


}



function welcomeMsg(Msg:string){
    const answers=Msg;
    console.log(answers);
    getInputFormUser();
   // const inquirer.prompt()
}
 welcomeMsg("Hey there! Perform Your Calculation :)")

// console.log('ahmad');


async function getInputFormUser() {
    const answer=await inquirer.prompt([
        {
            name:"firstNumber",
            message:"Enter first number",
            type: "input",
            validate:function(input){
                if(isNaN(input)){
                    return "Not a valid Input"
                }
                else{
                    return true;
                }
            }
        },
        {
            name: "operation",
            message:"Choose as operation",
            type:"list",
            choices:["+","-","x","/","^","%"]
        },
        {
            name:"secondNumber",
            message:"Enter Second Number",
            type:"input",
            validate:function(input){
                if(isNaN(input)){
                    return "Not a valid Input";
                }
                else{
                    return true;
                }
            }
        }
    ])
    console.log(answer);

    const first=Number(answer.firstNumber);
    const secnumber=Number(answer.secondNumber);
    switch(answer.operation){
        case "+":
            console.log(first + secnumber);
            break;
            case "-":
            console.log(first - secnumber);
            break;
            case "x":
            console.log(first * secnumber);
            break;
            case "/":
            console.log(first / secnumber);
            break;
            case "^":
                console.log(first ** secnumber);
                break;
            case "%":
                    console.log(first % secnumber);
                    break;
    }
}