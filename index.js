const express= require("express")
const dotenv= require('dotenv')
const app= express()
const cors=require('cors')
const connectDB= require('./config/db')
const colors= require('colors')
const authRoutes=require('./routes/authRoutes')
const categoryRoutes= require('./routes/categoryRoutes')
const productRoutes= require("./routes/productRoutes")
app.use(express.json())
app.use(cors())
dotenv.config()
connectDB()
app.use("/auth",authRoutes)
app.use("/category",categoryRoutes)
app.use("/product",productRoutes)
let port = process.env.PORT

app.listen(port,()=>{
    console.log(`server is running on the port: ${port}` .bgMagenta);
    
})