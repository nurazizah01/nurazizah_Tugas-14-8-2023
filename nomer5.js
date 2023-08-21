const readline=require('readline')
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stout
})

rl.question("apa nama depan mu?",(namadepan) =>{
    rl.question("apa nama belakang mu?",(namabelakang))
    console.log({
        namadepan:namadepan,
        namabelakang:namabelakang
    })
})