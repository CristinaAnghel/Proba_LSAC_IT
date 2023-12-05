
const express = require("express");
const bodyParser = require("body-parser");
const http = require("http");
const mongoose = require("mongoose");
const cors = require("cors");

const config = require("./config/config")

const healthRoutes = require("./routes/health.route")

const pollsRoutes = require("./routes/polls.routes")

const userRoutes = require("./routes/user.routes")

const app = express();

const server = http.createServer(app);

mongoose.connect(config.mongo_url)
    .then(() => {
        console.log("Connected to mongoDB");
    })
    .catch(e => console.log(e));

// Bodyparser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use("/api/health", healthRoutes);

app.use("/api/polls", pollsRoutes);

app.use("/api/user", userRoutes);

server.listen(config.port, () => {
    console.log(`listening on localhost:${config.port}`);
});

//ce plm tre sa fac

const userSchema = new mongoose.Schema({
    email:'String',
    password:'String'
})

const userAuth = new mongoose.model('users', userSchema)

app.get('/', (req, res) => {
    res.render("")
})

app.post('/register', async(req, res) => {
    console.log(req.body)
    const newUser = userAuth({
        email:req.body.email,
        password:req.body.password
    })

    await  newUser.save()
    console.log('user saved')
    res.redirect('/')
})
