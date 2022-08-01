const http=require('http')
const port=process.env.Port||3000
const server=http.createServer((req,res)=>
{
    res.setHeader('Content-Type','text/html');
    if(req.url==='/')
    {
    res.statusCode=200
    res.end('hello')
    }
    else if(req.url==='/About')
    {
        res.statusCode=200
    res.end('about')
    }
    else{
        res.statusCode=404
    res.end('Not Found')
    }
})
server.listen(port,()=>{console.log('listening')})