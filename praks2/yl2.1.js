const readline = require('node:readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Sisestage õhutemperatuur: ", temp => {
    let greeting;
    if (temp < 4){
        greeting = "On jäätumise oht";
        }  else {
            greeting = "Pole jäätumise ohtu";
        }
        console.log(greeting);
        rl.close()
});

 