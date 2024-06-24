const mongoose = require('mongoose');

const connectDB = async () => {
    try {
    const connection = await mongoose.connect('mongodb+srv://joe:joeadmin123@cluster0.efm0dz0.mongodb.net/vending?retryWrites=true&w=majority&appName=Cluster0', {});
    console.log("MongoDB spojen!");}
    catch(error) {
        console.error(error);
        process.exit(1);
    }
};

module.exports = connectDB;