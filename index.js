const program = require('commander');
const chalk = require('chalk');
const createPassword = require('./services/createPassword'); 
const saveToFile = require('./services/savePassword'); 

program.version('1.0.0').description('Password Generator')

program
.option('-l, --length <number>','Length of password')
.option('-s, --save','Save to file (passwords.txt)')
.option('-nn, --no-numbers','Without numbers')
.option('-ns, --no-symbols','Without symbols')
.parse();

const { length,save,numbers,symbols } = program.opts();

const password = createPassword(length,numbers,symbols); 

if(save){
    saveToFile(password); 
}

console.log(chalk.blue('Your Password: ') + chalk.bold(password));