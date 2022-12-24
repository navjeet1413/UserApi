import express from "express";
import User from "../models/user.js"

const router = express.Router();

router.get('/',async(req,res) =>{
    try{
        const usersdata = await User.find();
        res.send(usersdata);
    }catch(err){
        res.send(err)
    }
})

router.post('/',async(req,res)=>{
    const data = req.body;
    console.log(data);
    try{
        const userdata = new User(data)
        await userdata.save();
        // we need to show created when created which is 201
        return res.status(201).json(userdata);
    }
    catch(err){
        // it should show error status 400 when there is an error
        return res.status(400).json(err)
    }
})

router.get('/:id',async(req,res) =>{
    try{
        const _id = req.params.id;
        const userData = await User.findById(_id)
        if(!userData){
            res.status(404)
        }
        else{
            res.send(userData)
        }
        
    }
    catch(err){
        res.send(err)
    }
})

router.delete('/:id',async(req,res) =>{
    try{
        const _id = req.params.id;
        const deleteUser = await User.findByIdAndDelete(_id)  
        if(!deleteUser){
            res.status(404)
        }  
        res.status(500).send(deleteUser)
    }
    catch(err){
        res.send(err)
    }
})

// update the student by id

router.put('/:id',async(req,res) =>{
    try{
        const _id = req.params.id;
        const updateUser = await User.findByIdAndUpdate(_id,req.body,{
            new :true
        });

        res.send(updateUser)
    }
    catch(err){
        res.status(404).send(err)
    }
})

export default router