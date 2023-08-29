const { UserModel } = require("../models/User.model")

// to register user 

exports.registerUser = async(req,res)=>{
    const {name,email, password} = req.body;
    try {
        await UserModel.create({...req.body})  // creating a document in database
        res.status(200)
        res.send({msg:"User Registered Successfully"})
        
    } catch (error) {
        res.status(501)
        res.send({msg:error.message})
    }
}

// to login user 

exports.loginUser = async(req,res)=>{
    const {email,password} = req.body;

    try {
        const userData= await UserModel.findOne({email});
        if(userData){
            // checking password provided by user is correct or not
            if(userData.password == password){
                res.status(200)
                res.send({msg:"User Login Successfully, Enjoy!"})
            }else{
                res.status(401)
                res.send({msg:"You have Entered Wrong Password"})
            }
        }else{
            res.status(404)
            res.send({msg:"No Account Find associated to this email"})
        }
        
    } catch (error) {
        res.status(501)
        res.send({msg:error.message})   
    }
}