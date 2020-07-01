/* CARA MEMBUAT FUNGSI DI NODEJS
function tampil (param){
    console.log("Fungsi berhasil dibuat " + param)
}

tampil("Hallo Amri")

let tampil2 =() => {
    console.log("Selamat fungsi ke 2 telah berhasil dibuat")
}

tampil2()
*/


// problem : we need a simple to look at github profile
// solution : use nodejs to connect to github API to get profile info and print out the console

// todo : [x] connect to github

const https = require('https')
const options = {
    hostname: 'api.github.com',
    port: 443,
    path: '/users/amrihasan',
    method: 'GET',
    headers: {
        'user-agent':'nodejs'
    }
}

// todo : [x] read the data
let request = https.request(options, (response) => {
    let body = ''
    response.on('data', (data) => {
        body = body + data
  })
    response.on('end', () => {
        // todo : [x] parse the data 
        // convert String to JSON (javascript object)
        let profile = JSON.parse(body)
        console.log(profile.avatar_url)
    })
    
    // todo : print the data out
});

request.end()

request.on('error', (e) => {
    console.error(e)
})



