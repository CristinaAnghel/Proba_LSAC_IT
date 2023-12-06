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
    /*
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
        }
        console.log(userData);
        return res.send(userData);
        



    }catch(e){
        return res.send({succes: false, message: e.message});
    }
    */

    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({ message: 'User not found' });
        }

        const isPasswordValid = await compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid password' });
        }

        res.status(200).json({ message: 'Login successful', user });
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
})

module.exports = router;