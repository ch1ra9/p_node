const http = require('http')
const fs = require('fs')
const url = require('url')
const EventEmmiter= require('events')

//==>events

// const event= new EventEmmiter()

// event.on("sayMyName",()=>{
//   console.log("my name is khan");
// });
// event.emit("sayMyName")


//==> file read write

// const fileContent = fs.readFileSync('index.html')
// console.log(fileContent);

// exports.myDate = () => {
//   return Date();
// }

const server = http.createServer((req, res) => {
  //==> fs practice
  //res.writeHead(200,{'content-type':'text/html'});
  //console.log("@@@",req.url.query );

  //==> url parsing
  // var q = url.parse(req.url, true).query;
  // var txt = q.year + " " + q.month;

  //res.end(txt)
  //==> dynamic module
  //res.write(this.myDate())
  //res.end(fileContent)

  //==> routhing
  // if(req.url=="/"){
  //   res.end("home page")
  // }
  // else if(req.url=="/about"){
  //   res.end("about PAGE")
  // }else{
  //   res.end("404 page")
  // }


  //===> api 

  // fs.readFile(`${__dirname}/api/api.json` ,"utf-8",(err, data) => {

  //   console.log(data);
  //   res.end(data)
  // })

})


server.listen(8000, "127.0.0.1", () => {
  //console.log("server is running");
})


// var http = require('http');

// //create a server object:
// http.createServer(function (req, res) {
//   res.write('Hello World!'); //write a response to the client
//   res.end(); //end the response
// }).listen(8080);