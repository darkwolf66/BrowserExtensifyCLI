#!/usr/bin/env node
"use strict";
const { Command } = require("commander"); // add this line
const figlet = require("figlet");
console.log(figlet.textSync("BrowserExtensify"));
//add the following line
const program = new Command();
program
    .version("1.0.0")
    .description("BrowserExtensify CLI for managing a browser extension project.");
const { makeRoute } = require('./commands/make/Route');
//Register Commands
program.command('make:route <route>')
    .description('Create a new route on the project.')
    .action((route, args) => makeRoute(route, args));
program.parse(process.argv);
const options = program.opts();
//# sourceMappingURL=main.js.map