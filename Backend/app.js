const express = require("express");
const mongoose = require("mongoose")
const router = require("./routes/user-routes")
const cookieParser = require("cookie-parser")
const cors = require("cors")
require("dotenv").config();
const app = express()
app.use(cors({ credentials: true, origin: "http://localhost:3000" }))
app.use(cookieParser())
app.use(express.json())
app.use('/api', router)

app.get('/', (req, res) => {
    res.send('Hello World!')
  })


mongoose.connect(`mongodb+srv://Simon:VnRfti_qN6DUydF@new-hope.6kamamm.mongodb.net/mern-auth?retryWrites=true&w=majority`).then(() => {
    app.listen(process.env.PORT || 5000);
    console.log("Database is connected and im listening to port 5000")
}).catch((err) => console.log(err))
/// showing some changes