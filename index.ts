#!/usr/bin/env node
import inquirer from "inquirer"
import chalk from "chalk"


let myBalance = 30000;
let mypin = 1234;
console.log(chalk.blue('Welcome to ATM machine...'))
console.log(chalk.green(`Your current account balance is ${myBalance}`));
let remainingBalance;
let password = await inquirer.prompt([
    {
        name: 'pin',
        type:'number',
        message:' Kindly enter you pin: ',

    },
]);

if(password.pin === mypin){
    console.log(chalk.green('Authentication Successfull. ATM Functionalitiese are unlock'))
    let atmFunctionalitiese = await inquirer.prompt([
    {
       name:'Operations',
       type:'list',
       message:'Kindly select an option',
       choices:['Withdraw','Check Balance','Exit']
    }])
    if(atmFunctionalitiese.Operations === 'Withdraw'){
        let withdraw = await inquirer.prompt([{
            name:'amount',
            type:'list',
            message:'Choose an amount or choose other amount',
            choices:[5000,1000,15000,20000,25000,'Other']

        }]);

         if(withdraw.amount === 'Other' ){
            let otherAmount = await inquirer.prompt([{
                name:'other',
                type:'number',
                message:'Enter your amount : '
            }]);
            if(otherAmount.other > myBalance){
                console.log(chalk.red('Insufficient Balance.'))
                console.log(chalk.yellow('Thank you for using ATM machine'))
            }



            else{
                remainingBalance =  myBalance - otherAmount.other;
                 console.log(chalk.green(`Your remaining balance is: ${remainingBalance}` ))

           }
        }

        else{
            remainingBalance = myBalance - withdraw.amount
            console.log(chalk.green(`Your remaining balance is: ${remainingBalance}`));
            console.log(chalk.yellow('Thank you for using ATM machine'))

           }


    }
    else if(atmFunctionalitiese.Operations === 'Check Balance'){
        console.log(chalk.green(`Your current balance is 30000`))
    }
    else if(atmFunctionalitiese.Operations === 'Exit'){
        console.log(chalk.yellow('Thank you for using ATM machine'))
    }
    else{
        console.log(chalk.red('Please select an option'))
    }
}
else{
    console.log(chalk.red('Authentication failed, Kindly enter a valid pin!'))
}
