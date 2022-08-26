import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

const user = [{ username:'',
                avatar:'',}]

const tweet = [{username:'',
                tweet:''}]               

app.post('/sign-up',(req, res) => {
    const loginUser = req.body;
    user.push(loginUser);
    
    console.log(req.body)
    res.send('ok');
})


app.listen(5000, ()=>console.log('listening on port 5000'));
