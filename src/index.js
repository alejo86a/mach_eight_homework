const algorithm = require('./algorithm')
const Request = require('request')
const fs = require('fs')



let args = process.argv.slice(2)
let players = []

if(args[1] === 'online'){
    players = Request.get("https://mach-eight.uc.r.appspot.com/", (error, response, body) => {
        if(error) {
            return console.dir(error)
        }
        console.log(algorithm(Array.from(JSON.parse(body).values), args[0]))
    })
} else {    
    let rawdata = fs.readFileSync('./data.json')
    players = JSON.parse(rawdata).values

    console.log(algorithm(players, args[0]))
}
