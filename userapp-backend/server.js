const userRegistration = require("./model/register");
const express = require("express");
const app = express();
app.use(express.json());
const mongoose = require("mongoose");
const { response } = require("express");
const registerModel = require("./model/register");
const port = 5000;

mongoose.connect("mongodb://localhost:27017/userapp").then(() => {
    console.log("MongoDB Connect");
}).catch((err) => {console.log(err)});

app.get("/",(req,res) => {
    return res.json({data:"This is user app"});
});
app.post("/api/userData",async(req,res) => {
    const userData = await userRegistration.findOne({username:req.body.username});
    if(userData){
        return res.json({data:userData});
    }
    else{
        return res.json({data:"User is not Exist"});
    }
});

app.post("/api/insertUser",async (req,res) => {
    const user = req.body;
    const userData = await userRegistration.findOne({username:user.username});
    if(userData){
        return res.json({data:"User already Exist"});
    }
    else{
        userRegistration.create(user);
        return res.json({data:"Data Inserted Successfully"});
    }
});

app.post("/api/loginUser",async(req,res) => {
    const uname = req.body.username;
    const password = req.body.password;
    const data = await userRegistration.findOne({username:uname,password:password});
    if(data){
        return res.json({data:"Login Successfully"});
    }
    else{
        return res.json({data:"Login Dosen't Successfully"});
    
    }
});

app.put("/api/updateUser",async(req,res) => {
    const uname = req.body.username;
    const age = req.body.age;
    const email = req.body.email;
    const pass = req.body.password;
    const data = await userRegistration.findOneAndUpdate(
        {username:uname},
        {age:age,email:email,password:pass},
        {new:true}
        );
    if(data){
       return res.json({data:"Data Updated Successfully"});
    }
    else{
        return res.json({data:"Not Updated"});
    }
});

app.delete("/api/deleteUser",async(req,res) => {
    const uname = req.body.username;
    const udata = await userRegistration.findOne({username:uname});
    if(udata){
        const data = await userRegistration.findOneAndDelete(
            {username:uname}
        );
        if(data){
            return res.json({data:"Data Deleted Successfully"});
         }
         else{
             return res.json({data:"Not Deleted"});
         }
    } else{
        return res.json({data:"User Doesn't match"});
    }
    
    
});

app.listen(port, () => {console.log(`App Running on ${port}`)});