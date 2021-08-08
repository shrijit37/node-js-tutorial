const http = require("http");                               //requiring http module

const server = http.createServer(function(req,res)          //creating server/localhost
{   
    res.writeHead(200,{"content-type":"text/html"});           //to change text content type
                                                                //here it is set as HTML
                                                                
    res.write("<h1>node js running<h1>");               //to print on webpage
    res.end();                                  //compulsory everytime /it is ending point

}).listen(3000,()=>console.log("server running on port 3000"));

