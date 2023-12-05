const router = require("express").Router();
const User = require("../models/user.models");

router.post("/", async (req, res) => {
    try{
        console.log(req.body);

        const user = new User({
            email: req.body.email,
            password: req.body.password
        });

        /*
        const duplicateUser = await User.findOne({email: user.email});
        if(duplicateUser){
            return res.send({succes: false, message:"User with that email already exists"})
            lalalal
            lll
        }*/

        await user.save();

        return res.send({success:true});
        }catch(e){
            return res.send({success: false, message: e.message});
        }
})

module.exports = router;