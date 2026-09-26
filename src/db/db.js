const mongoose = require("mongoose")


async function ConnectDB() {
    await mongoose.connect(process.env.MONGODB_URI)
    console.log("Connected Successfully To Database");    
}

module.exports = ConnectDB;