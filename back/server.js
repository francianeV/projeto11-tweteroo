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
    let currentUser = user.find( e => e.username === username);

    tweets.push({username, 
                 tweet, 
                 avatar : currentUser.avatar});

    res.sendStatus(200)

})

app.get('/tweets', (req, res) => {
    const recentTweets = tweets.slice(-10);

    res.send([...recentTweets].reverse());

})

app.listen(5000);
