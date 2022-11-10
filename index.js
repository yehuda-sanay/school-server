const express=require("express");
const cors= require("cors")

const app=express();
const port=8080;
app.use(express.json({extended:true}));
app.use(express.urlencoded({extended:true}));

app.use(cors())

const namesArray=["yehuda","batel","shlomo","shimon","eldad","dalia","yasso","naty","yoni","zenevo"]

const studentDetels=[{id:0, firstName:"yehuda",lastName:"sanay", age:"31",},
{id:1, firstName:"batel",lastName:"haylo", age:"26",},
{id:2, firstName:"eldad",lastName:"brano", age:"22",},
{id:3, firstName:"shlomo",lastName:"haylo", age:"29",}]

app.get("/student",(req,res)=>{
    res.send({message:`have the student detels`,studentDetels})
})
app.get("/byId/:id",(req,res)=>{
    const theStudent = studentDetels.find(student => student.id == req.params.id)
      theStudent?res.send({massage:`student found`,theStudent}):res.send({massage:`student not found`})

})
app.get("/names",(req,res)=>{
    res.send(`the names is ${namesArray}`)
})
app.get("/",(req,res)=>{
    res.send("Hi Yehuda")
})
app.post("/names",(req,res)=>{
    namesArray.push(req.body.newName)
    res.send("we have new name")
})
app.post("/student",(req,res)=>{
    studentDetels.push(req.body.newStudent)
    res.send({massage:`we have a new student`,studentDetels})
})


app.listen(port,()=>{
    console.log("all good");
})