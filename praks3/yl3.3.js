const readline = require('node:readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Sisesta täringute arv: ', taringuteArv => {
    for (let kord = 1; kord <= taringuteArv; kord++){
        console.log(Math.ceil(Math.random() * 6))
    } 
    rl.close()
})