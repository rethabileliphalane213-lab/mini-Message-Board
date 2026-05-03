const express=require("express")
const app=express()
const path=require("node:path")

app.set("views",path.join(__dirname))
app.set("view engine","ejs")

app.use(express.urlencoded({ extended: true })) 
const messages=[
{
    text:"Hello Handsome",
    user:"crush",
    added:new Date()
},
{
    text:"where are you?",
    user:"Thabelo",
    added:new Date()
}
]

app.get("/new",(req,res)=>{
    res.render("form",{title:"Mini Message Board",messages:messages})
})

app.post("/new",(req,res)=>{
    const { user, text } = req.body;
    messages.push({ user, text, added: new Date() });
    res.redirect("/");
})

PORT=process.env.PORT || 3000

app.listen(PORT,()=>{
    console.log(`Port running on ${PORT}`)
})