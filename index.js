#! /usr/bin/env node

import { program } from 'commander';
import chalk from 'chalk';
// import inquirer from "inquirer"; // Uncomment to use prompt
// import ora from "ora";           // Uncomment to use spinners
import figlet from 'figlet';

const { version, description } = createRequire(import.meta.url)("./package.json");

program
    .version(version)
    .description(description)
    .option('-n, --name <name>', 'specify a name', 'World')
    .option('-f, --figlet', 'use figlet')
    .action((options) => {
        const msg = `Hello, ${options.name}!`;
        if (options.figlet) {
            console.log(
                chalk.yellowBright(
                    figlet.textSync(msg, { horizontalLayout: 'full' }),
                ),
            );
        } else {
            console.log(chalk.green(msg));
        }
    });

program.parse(process.argv);
