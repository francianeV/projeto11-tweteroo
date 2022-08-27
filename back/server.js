import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

const user = []

const tweets = []               

app.post('/sign-up',(req, res) => {
    const {username, avatar} = req.body;
    user.push({username, avatar});

    res.sendStatus(200);
})

app.post('/tweets', (req, res) => {
    const {username,tweet} = req.body;
    tweets.push({username, tweet});

    res.sendStatus(200)

})


app.listen(5000, ()=>console.log('listening on port 5000'));
