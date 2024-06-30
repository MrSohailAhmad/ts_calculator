import inquirer from "inquirer";
import { add, subtract, multiply, divide } from "./calculator.js";

async function promptUser(): Promise<void> {
  const operationChoices = ["Add", "Subtract", "Multiply", "Divide"];

  const { operation } = await inquirer.prompt([
    {
      type: "list",
      name: "operation",
      message: "Choose an operation:",
      choices: operationChoices,
    },
  ]);

  const { num1, num2 } = await inquirer.prompt([
    {
      type: "number",
      name: "num1",
      message: "Enter the first number:",
    },
    {
      type: "number",
      name: "num2",
      message: "Enter the second number:",
    },
  ]);

  let result: number;
  switch (operation) {
    case "Add":
      result = add(num1, num2);
      break;
    case "Subtract":
      result = subtract(num1, num2);
      break;
    case "Multiply":
      result = multiply(num1, num2);
      break;
    case "Divide":
      result = divide(num1, num2);
      break;
    default:
      throw new Error("Invalid operation");
  }

  console.log(`Result of ${operation} ${num1} and ${num2} is: ${result}`);
}

promptUser().catch((err) => console.error(err));
