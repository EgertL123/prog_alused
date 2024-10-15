const readline = require('node:readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Sisestage enda vanus: ", vanus => {
    rl.question("Sisestage enda sugu (M, m või N, n): ", sugu => {
        rl.question("Sisestage treeningu tüüp (1, 2 või 3): ", trenn => {
            let pulss

            if(sugu == 'M' || sugu == 'm' ){
                pulss = 220 - vanus

            } else if(sugu == 'N' || sugu == 'n' ){
                pulss = 206 - vanus * 0.88
            }

            let minPulss
            let maxPulss

            if (trenn == 1){
                minPulss = 0.5 * pulss
                maxPulss = 0.7 * pulss
            } else if (trenn == 2){
                minPulss = 0.7 * pulss
                maxPulss = 0.8 * pulss
            } else if (trenn == 3){
                minPulss = 0.8 * pulss
                maxPulss = 0.87 * pulss
            }
            
            maxPulss = Math.round(maxPulss)
            minPulss = Math.round(minPulss)

            console.log(`Pulsisagedus peab olema ${minPulss} kuni ${maxPulss}.`)

            rl.close()
        })
    })
})