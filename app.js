
//1
console.log("Hello world");

//2
const os = require('os');
console.log('Architecture ' + os.arch());
console.log('CPUs ' + os.cpus().length);
console.log('OS ' + os.platform());

//3
const fileSystem = require('fs');
const fileName = __dirname + '/test.txt';

fileSystem.readFile(fileName,(err, data) => {
    if(err){
        console.error(err);
    }
    console.log(data.toString());
});

const data = fileSystem.readFileSync(fileName);
console.log(data.toString());

//4
const fileName2 = __dirname + '/test.txt';
const outFileName = __dirname + '/test-copy.txt';

const readStream = fileSystem.createReadStream(fileName2);
const writeSream = fileSystem.createWriteStream(outFileName);

readStream.pipe(writeSream);

readStream.on('data',data=>{
    console.log(data.toString());
});

//5
const http = require('http');
http.createServer((req, res)=> {
    res.setHeader('Content-Type','text/html');
    switch (req.method) {
        case 'GET':
            res.write('<h1>Hello World</h1>');
            res.end();
            break;
        case 'POST':
            req.on('data', data => {
                res.write('<h1>Hello ' + data + '</h1>');
                res.end();
            });
            break;
    }

}).listen(3000,(err) =>{
    console.log("server is listening to port 3000");
});





