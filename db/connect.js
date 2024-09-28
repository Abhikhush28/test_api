const mongoose = require('mongoose')

// uri = "mongodb+srv://sahuabhikhush:JNyITTTeGgI6lYmj@apitest.lvnaz.mongodb.net/apiTest?retryWrites=true&w=majority&appName=apiTest"

const connectDB = (uri) => {
    console.log("mongodb connected.")
    return mongoose.connect(uri);
};


module.exports = connectDB;