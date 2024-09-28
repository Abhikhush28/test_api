require("dotenv").config()
const connectDB = require('./db/connect.js');
const Product = require("./model/product.model.js")
const ProductJson = require('./products.json')



const start = async () => {
    try {
        await connectDB(process.env.MONGODB_URI)
        await Product.deleteMany()
        await Product.create(ProductJson)
        console.log("sucess")
    } catch (error) {
        console.log(error);
    }
}
start();