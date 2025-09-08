import mongoose from "mongoose";

export const connectDB = async () => {
    try{
        mongoose.connection.on('connected', ()=>console.log('Database is connected'))
        await mongoose.connect(`${process.env.MONGODB_URI}/Varta`)
    }
    catch(error){
        console.log(error)
    }
}