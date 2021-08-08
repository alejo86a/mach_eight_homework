const algorithm = require('./algorithm')
// const Request = require('request')

let args = process.argv.slice(2)
let players = []
// Request.get("https://mach-eight.uc.r.appspot.com/").then(body => {
//     console.log(algorithm(JSON.parse(body),args))
// });
//  {
//     if(error) {
//         return console.dir("error: ", error);
//     }
//     return console.log(algorithm(JSON.parse(body),args));
//     // return console.log("data: ",JSON.parse(body));
// }

// Request.get("https://mach-eight.uc.r.appspot.com/", (error, response, body) => {
//     if(error) {
//         return console.dir(error);
//     }
//     console.dir(JSON.parse(body));
// });

const fs = require('fs')

let rawdata = fs.readFileSync('./src/data.json')
players = JSON.parse(rawdata).values

console.log(algorithm(players, args))
