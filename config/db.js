const mongoose=require('mongoose')
const colors= require('colors')
const connectDB= async()=>{
    try{
        let conn = await mongoose.connect(process.env.MONGO_URL)
        console.log(`successfully connected to MONGO db server ${conn.connection.host}`.bgGreen);
        
    }catch(error){
        console.log("Error while connecting to the db");
        
    }
}
module.exports=connectDB