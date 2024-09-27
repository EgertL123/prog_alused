const readline = require('node:readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Sisestage ainepunktide arv: ', ainepunktid => { 
    rl.question('Sisestage nädalate arv: ', nadalad => {
        let ajakulu = Math.round(ainepunktid * 26 / nadalad)
        console.log(ajakulu)
        rl.close()
    })
})   