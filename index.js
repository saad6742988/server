const express=require('express')
const e=express();
e.get('/',(req,res)=>
{
    res.send("hello Saad")
})
e.get('/Bilal',(req,res)=>
{
    res.send("hello bilal")
})
e.listen(process.env.PORT||300,()=>{console.log('listening express server')})
