import express from 'express';
import {createClient} from '@supabase/supabase-js';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';
// import bcrypt from 'bcrypt';
dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());


const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

// routes
app.get("/", async (req, res) => {
    const { data: coffeeinfo, error } = await supabase.from("coffeeinfo").select("*");
    if (error) return res.status(401).json({ error });
    else return res.json(coffeeinfo);
  });

app.post('/payment',async(req,res)=>{
    const {email,amount} = req.body;
    let {error} = await supabase.from('payment').insert([{email,amount}]);
    res.send({message:'success'});
});

app.post('/email',async(req,res)=>{
    const {email,password} = req.body;
    const hash = bcrypt.hashSync(password,10);
    let {data,error} = await supabase.from('email').insert([{email,password:hash}]);
    res.send(data);
});

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
});