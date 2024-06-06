const http=require("http");
const PORT=4000;
const hostname="localhost";
const server=http.createServer((request,response)=>{
  if(request.url==="/"){
    response.end("<h1>HOME PAGE</h1>")
  }
    if(request.url==="/about"){
    response.end("<h1>ABOUT PAGE</h1>")
  }
  if(request.url==="/contact"){
    response.end("<h1>CONTACT PAGE</h1>")
  }
});
server.listen(PORT,hostname,()=>{
    console.log(`server is working on http://${hostname}:${PORT}`);
});

