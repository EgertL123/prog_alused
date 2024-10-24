const readline = require('node:readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Sisesta ringide arv: ', ringideArv => {
    let porgandid = 0
    for (let ring= 1; ring <= ringideArv; ring++){
        if(ring % 2 == 0){
        porgandid = porgandid + ring
        } 
    } 
    console.log(`Porgandite koguarv on ${porgandid}`)
    rl.close()
})