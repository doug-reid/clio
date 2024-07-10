#! /usr/bin/env node

import { program } from "commander"
import chalk from "chalk";
// import inquirer from "inquirer"; // Uncomment to use prompt
// import ora from "ora";           // Uncomment to use spinners
import figlet from "figlet";

program
  .version("0.1.0")
  .description("A new CLI app")
  .option("-n, --name <name>", "specify a name", "World")
  .option("-f, --figlet", "use figlet")
  .action((options) => {
    const msg = `Hello, ${options.name}!`;
    if(options.figlet) {
        console.log(chalk.yellowBright(figlet.textSync(msg, { horizontalLayout: "full" })))
    } else {
        console.log(chalk.green(msg));
    }
  });

program.parse(process.argv);
