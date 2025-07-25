const express = require("express")
const app = express();
const cors = require("cors")
const dotenv = require("dotenv")

// Routes
const paymentRoutes = require("./routes/paymentRoutes")

dotenv.config()

app.use('/api', paymentRoutes)
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(cors())


app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port on ${process.env.PORT || 3000}`);
})