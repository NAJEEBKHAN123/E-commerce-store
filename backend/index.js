import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config();
import authRoutes from './routes/auth.route.js'


const app = express();
const PORT = process.env.PORT || 5000;

//middleware
app.use(cors());




app.get('/', (req, res) =>{
    res.send("this is home page")
})

//path 
app.use("/api/auth", authRoutes)



app.listen(PORT, () =>{
    console.log(`Server is running on http://localhost:${PORT} `)
})