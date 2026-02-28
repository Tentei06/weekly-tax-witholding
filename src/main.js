/*
----------------------------------------------
Program Name: Weekly Average Tax Withholding
Author: Cody Walker
Date: 2026
----------------------------------------------
Pseudocode:
1. Ask the user for weekly income.
2. Determine tax rate using income brackets.
3. Calculate withholding.
4. Display results.
----------------------------------------------
*/

const readline = require("readline");

function getTaxRate(income) {
    if (income < 500) {
        return 0.10;
    } 
    else if (income < 1500) {
        return 0.15;
    } 
    else if (income < 2500) {
        return 0.20;
    } 
    else {
        return 0.30;
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("=== Weekly Tax Withholding Calculator ===");

rl.question("Enter weekly income: $", function(answer) {

    const income = Number(answer);

    // Ensures valid numeric input
    if (isNaN(income) || income < 0) {
        console.log("Invalid income entered.");
        rl.close();
        return;
    }

    const taxRate = getTaxRate(income);
    const withholding = income * taxRate;

    console.log("\n--- Results ---");
    console.log(`Weekly Income: $${income.toFixed(2)}`);
    console.log(`Tax Rate: ${(taxRate * 100)}%`);
    console.log(`Weekly Withholding: $${withholding.toFixed(2)}`);

    rl.close();
});