const http = require("http");                               //requiring http module

const server = http.createServer(function(req,res)          //creating server/localhost
{
    res.write("node js running");               //to print on webpage
    res.end();                                  //compulsory everytime /it is ending point

}).listen(3000,()=>console.log("server running on port 3000"));

