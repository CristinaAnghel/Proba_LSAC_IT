const router = require("express").Router();
const Poll = require("../models/polls.models");
const mongoose = require('mongoose');

router.post("/", async (req, res) => {
    try{
        console.log(req.body);

        const poll = new Poll({
            question: req.body.question,
            option1: req.body.option1,
            option2: req.body.option2,
            option3: req.body.option3
        });

        console.log(poll);
        await poll.save();

        return res.send({success: true});
        }catch(e){
            return res.send({succes: false, message: e.message});
        }
    
})


router.delete('/:id', async (req, res) => {
  try {
    const pollId = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(pollId)) {
      return res.status(400).json({ message: 'Invalid poll ID' });
    }

    const deletedPoll = await Poll.findByIdAndDelete(pollId);

    if (!deletedPoll) {
      return res.status(404).json({ message: 'Poll not found' });
    }

    res.json({ message: 'Poll deleted successfully', data: deletedPoll });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.get("/", async (_, res) => {
    try{
        const pollData = await Poll.find();

        let arrayPollData = [];

        for(const poll of pollData) {
            arrayPollData.push({
                question: poll.question,
                option1: poll.option1,
                option2: poll.option2,
                option3: poll.option3
            });
        }

        return res.send(arrayPollData);
    }catch(e){
        return res.send({success: false, message: e.message});
    }
})

router.patch('/:id/vote', async (req, res) => {
    try {
      const pollId = req.params.id;
      const { option } = req.body;
  
      if (!mongoose.Types.ObjectId.isValid(pollId)) {
        return res.status(400).json({ message: 'Invalid poll ID' });
      }
  
      if (!option) {
        return res.status(400).json({ message: 'Option is required for voting' });
      }
  
      const poll = await Poll.findById(pollId);
  
      if (!poll) {
        return res.status(404).json({ message: 'Poll not found' });
      }
  
      poll[`${option}_choose`] = true;
  
      const updatedPoll = await poll.save();
  
      res.json({ message: 'Vote recorded successfully', data: updatedPoll });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });

module.exports = router;