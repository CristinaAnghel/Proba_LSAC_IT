const router = require("express").Router();
const Poll = require("../models/polls.models");

router.post("/", async (req, res) => {
    try{
        console.log(req.body);

        const poll = new Poll({
            question: req.body.question,
            option1: req.body.option1,
            option2: req.body.option2,
            option3: req.body.option3
        });

        await poll.save();

        return res.send({success: true});
        }catch(e){
            return res.send({succes: false, message: e.message});
        }
    
})

module.exports = router;