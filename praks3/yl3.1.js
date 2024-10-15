const readline = require('node:readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Sisesta mitu korda äratada: ", mituKorda => {
  for(let kord = 1; kord <= mituKorda; kord++){
    console.log('Tõuse ja sära!')
  } 
  rl.close()
})