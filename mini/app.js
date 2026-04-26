const express=require("express")
const app=express()


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

app.get("/",(req,res)=>{
    res.render("index",{title:"Mini Message Board",messages:messages})
})