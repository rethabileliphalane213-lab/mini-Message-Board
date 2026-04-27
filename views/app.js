const express=require("express")
const app=express()
const path=require("node:path")

app.set("views",path.join(__dirname))
app.set("views engine","ejs")


const messages=[
{
    text:"Hello Handsome",
    user:"crush",
    add:new Date()
},
{
    text:"pheha papa",
    user:"Thabelo",
    add:new Date()
}
]

app.get("/new",(req,res)=>{
    res.render("form",{title:"Mini Message Board",messages:messages})
})

app.post("/new",(req,res)=>{
res.render("form",{messages:messages})
})

PORT=process.env.PORT

app.listen(PORT,()=>{
    console.log(`Port running on ${PORT}`)
})