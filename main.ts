#!usr/bin/env

import inquirer from "inquirer";

console.log ("DEAR STUDENT\nWELCOME TO RAHI ACADEMY\n");

const idNumber : number = Math.floor(10000+Math.random()*90000);

let answer = await inquirer.prompt (
    [
        {
            name: "students",
            type: "input",
            message: "Enter Your Full Name:",
        },
        {
            name: "courses",
            type: "list",
            message: "Select The Course",
            choices: ["Front-End Developer", "Back-End Developer", "Full-Stack Developer"]

        }
    ]
);

const courseFees: {[key:string]:number} = {
    "Front-End Developer": 10000,
    "Back-End Developer": 15000,
    "Full-Stack Developer": 20000,
};

console.log(`Selected course fees is : ${courseFees[answer.courses]}`)

let paymentOptions = await inquirer.prompt(
    [
        {
            name : "payment",
            type: "list",
            message: "Select Payment Method:",
            choices: ["Bank Transfer", "Easy Paisa", "Jazz Cash"],
        },
        {
            name: "amount",
            type: "input",
            message: "Enter The Amount In PKR:",
            validate: function (value) {
                if (value !== ""){
                    return true;
                }
                return "Payment Amount Cannot Be Empty."
            },
        }
    ]
)
console.log(`Selected Payment Method: ${paymentOptions.payment}`);

const selectedCourseFee: number = courseFees[answer.courses];

const paymentAmount : number = parseFloat(paymentOptions.amount);

if (selectedCourseFee === paymentAmount){
    console.log ("\nCongratulations!\nYou Have Successfully Enrolled In The Course.\n");
    console.log (`${answer.students} Enrollment Details\n`);
    console.log(`Student Name: ${answer.students}`);
    console.log(`Student ID: ${idNumber}`);
    console.log(`Enrolled Course: ${answer.courses}`);
    console.log(`Course Fee: ${paymentOptions.amount}\n`);
    console.log("Embark On The Learning Adventure Ahead!");
}
else{
    console.log("Try Again");
}