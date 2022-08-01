const express=require('express')
const e=express();
e.get('/',(req,res)=>
{
    res.send("hello expreess")
})
e.listen(process.env.PORT||300,()=>{console.log('listening express server')})
