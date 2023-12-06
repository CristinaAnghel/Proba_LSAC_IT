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
            
        }
        */

        await user.save();

        return res.send({success:true});
        }catch(e){
            return res.send({success: false, message: e.message});
        }
})

router.get("/", async (req, res) => {
    try {
        
        const user = ({
            email: req.body.email,
            password: req.body.password
        });
        

        //const UserEmail = req.params.email;
        const userData = await User.findOne({
            email: user.email,
            password: user.password

        });

        /*
        let arrayUserData =[];

        for(const user of userData) {
            arrayUserData.push({
                email: user.email,
                date: user.date
            });
        }*/
        console.log(userData);
        return res.send(userData);
        



    }catch(e){
        return res.send({succes: false, message: e.message});
    }
})

module.exports = router;