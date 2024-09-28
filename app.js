require("dotenv").config()
const express = require("express");
const app = express();
const products_routes = require("./routes/product.routes")
const connectDB = require('./db/connect.js')
app.get("/", (req, res) => {
    res.send("Hi I am live.")
})

// middleware or to set router
app.use("/api/products", products_routes)

const PORT = process.env.PORT || 5000;

const start = async () => {
    try {
        await connectDB(process.env.MONGODB_URI);
        app.listen(PORT, () => {
            console.log(`${PORT} Yes I am Connected.`);
        })
    } catch (error) {
        console.log(error)
    }
}

start();