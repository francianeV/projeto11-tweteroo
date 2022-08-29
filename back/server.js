import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

const user = []

const tweets = []               

app.post('/sign-up',(req, res) => {
    const {username, avatar} = req.body;

    if(!username || !avatar) {
        return res.status(400).send('Todos os campos são obrigatórios!');
    }

    user.push({username, avatar});

    res.sendStatus(201);
})

app.post('/tweets', (req, res) => {
    const {username,tweet} = req.body;
    let currentUser = user.find( e => e.username === username);

    if(!username || !tweet) {
        return res.status(400).send('Todos os campos são obrigatórios!');
    }

    tweets.push({username, 
                 tweet, 
                 avatar : currentUser.avatar});

    res.sendStatus(201)

})

app.get('/tweets', (req, res) => {
    const recentTweets = tweets.slice(-10);

    res.send([...recentTweets].reverse());

})

app.listen(5000);
