import express from 'express'
import mongoose from 'mongoose';
import { connect } from './db/connection.js';

import userRoutes from './routes/users.js';

connect()
const app = express();
const PORT = 8000;

app.use(express.json());
app.use('/user',userRoutes)
app.get('/',(req,res)=>{
    res.send("ST-2 PROJECT")
})

app.listen(PORT, ()=>{
    console.log(`server running on port http://localhost:${PORT}`)
})