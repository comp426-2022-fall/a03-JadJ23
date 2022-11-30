#!/usr/bin/env node

import minimist from "minimist";
import {roll} from "../lib/roll.js"

const vals = minimist(process.argv.slice(2));
export function main(){
    console.log(JSON.stringify(roll(vals.sides,vals.dice,vals.rolls)));
};

main();