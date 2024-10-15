const readline = require('node:readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Kas soovite istekoha valida ise voi loosida?", valik => {
    if(valik == 'ise'){
        rl.question("Kas soovite istuda akna aares voi mitte?", koht =>{
            if(koht == 'aken'){
                console.log('Valisite ise. Aknakoht.')
            }else if(koht == 'muu'){
                console.log('Valisite ise. Vahekäigukoht.')
            }  
            rl.close()
        })
        }else if(valik == 'loos'){
            if (Math.ceil(Math.random() * 3) == 1) {
                console.log('Koht loositi. Aknakoht')
            }else {
                console.log('Koht loositi. Vahekäigukoht.')
            }  
            rl.close()
        } 
})