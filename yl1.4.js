const readline = require('node:readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Sisesta oma nimi: ', nimi => { 
    rl.question('Sisesta lubatud kiirus (km/h): ', lubatudKiirus => {
        rl.question('Sisesta tegelik kiirus (km/h): ', tegelikKiirus => { 
        let trahv = (tegelikKiirus - lubatudKiirus) * 3
        trahv = Math.min(trahv, 190)
        console.log(`${nimi}, kiiruse ületamise eest on teie trahv ${trahv} eurot.`)
        rl.close()
        })
    })
})   