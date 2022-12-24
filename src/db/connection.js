import mongoose from "mongoose"

export function connect() {
    mongoose.connect("mongodb+srv://navjeet17:NAVI2002@cluster0.auinkwj.mongodb.net/test")
    .then(()=>{
        console.log("connnection successful")
    })
    .catch((err) => console.log(err))
}
mongoose.set('strictQuery', false);