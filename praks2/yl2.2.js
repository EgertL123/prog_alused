const readline = require('node:readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Sisestage Leedu perenimi: ", nimi => {
    if(nimi.slice(-2) == 'ne') {
        greeting =  "Abielus"; 
     
    }  else if(nimi.slice(-2) == 'te') {
            greeting = "Vallaline"
         
    } else if(nimi.slice(-1) == 'e') {
        greeting = "Maaramata"
    } else {
        greeting = "Pole leedulanna perekonnanimi"
    } 
    console.log(greeting)
    rl.close()
});