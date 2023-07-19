const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const port = process.env.PORT || 3000;
const router = require("./routes/router.js");
const { json } = require("sequelize");

app.use(express.json())
app.use(express.urlencoded({extended:true}))

// app.get('/', (req, res)=>{
// res.json({message:"kireee"})
// })
app.use("/api", router);

app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
    }
);