const http = require('http');
const fs = require('fs');

const fileName ='Emmanuella_on_Kids_Say_The_Darnest_Things_Show_Nigeria.mp4';

console.log(fileName)


const HOST = '127.0.0.1';
const PORT = '3000';


const server= http.createServer((req, res)=>{
    res.statusCode = 200;
    res.setHeader('content-Type', 'video/mp4');
    res.end

    let method = reg.method ;
 let url = reg.url;
 if(url==='/'){
     res.end('welcome');
 }else if (url==='/video' && method==='Get'){
     res.statusCode=200
     res.end;
 }else{
     res.statusCode=404
     res.end('contents not found');
 }

fs.createReadStream(fileName).pipe(res)
})

server.listen(PORT , HOST , ()=>{
    console.log(`sever running at http://${HOST}:${PORT}/`)});