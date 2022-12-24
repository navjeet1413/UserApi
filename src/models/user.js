import mongoose from "mongoose";
import validator from "validator";

const userSchema = new mongoose.Schema({
    name :{
        type : String,
        require: true,
        minlength :3
    },
    email :{
        type : String,
        require: true,
        unique:[true, "Email id already present"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("invalid Email")
            }
        }
    },
    phone:{
        type: Number,
        // min:10,
        // max:11,
        required :true,
        unique:true
    },
    department :{ 
        type: String
    }
})

// we will create a new collection
// User is a collection
const User = new mongoose.model('User',userSchema);

export default User