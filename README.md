# JavaScript Weekly Tax Withholding Calculator

A JavaScript console application that calculates estimated weekly tax withholding based on a user's weekly income.

The program accepts income through the console, validates the input, determines the appropriate tax rate based on predefined income brackets, and displays the calculated withholding amount.

## Concepts Demonstrated

- JavaScript functions
- Node.js console input with `readline`
- `if` / `else if` conditional logic
- `switch` statements
- Numeric input validation
- Arithmetic calculations
- Template literals
- Formatted numeric output

## How It Works

The user enters a weekly income amount, which the program uses to determine a tax rate from four predefined income brackets.

The program then:

1. Validates that the entered income is a non-negative number.
2. Passes the income to the `getTaxRate()` function.
3. Determines the appropriate income bracket.
4. Returns the corresponding tax rate.
5. Calculates the weekly withholding amount.
6. Displays the income, tax rate, and calculated withholding.

## Tax Brackets

| Weekly Income | Withholding Rate |
| --- | ---: |
| Less than $500 | 10% |
| $500 to less than $1,500 | 15% |
| $1,500 to less than $2,500 | 20% |
| $2,500 or more | 30% |

> **Note:** These withholding rates are predefined values used for this programming exercise and should not be treated as actual tax guidance.

## Technologies

- JavaScript
- Node.js
- Node.js `readline` module

## How to Run

1. Clone or download the repository.
2. Make sure Node.js is installed.
3. Open a terminal in the repository directory.
4. Run:

```bash
node src/main.js
```

5. Enter a weekly income when prompted.
6. Review the calculated withholding in the console.

## Project Context

This project was created as an introductory programming exercise focused on conditional logic, functions, user input, validation, and basic calculations. It is retained as part of my progression from introductory programs to more complex software projects.

## License

This project is licensed under the MIT License.
