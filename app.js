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

// todo : connect to github

const https = require('https');
const options = {
    hostname: "api.github.com",
    port: 443,
    path: 'users/amrihasan',
    method: 'GET',
    headers: {
        'user-agent':'nodejs'
    }
}

let request = https.request(options, (res) => {
  console.log('statusCode:', res.statusCode);

});

request.end()
request.on('error', (e) => {
    console.error(e)
})


// todo : read the data
// todo : parse the data 
// todo : print the data out