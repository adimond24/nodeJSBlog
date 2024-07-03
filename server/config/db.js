const mongoose = require("mongoose");

const dbPath = process.env.pie;

const connectDB = async ()=>{
    try {
        await mongoose.connect(dbPath);
        console.log("Mongodb CONNECTED");
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}



module.exports = connectDB;


