const mongoose = require('mongoose');

const mongoURI = "mongodb://127.0.0.1:27017/resumebuilder";

connectToMongoDB().catch(err => console.log(err));
connectToMongoDB().then(()=>{
    console.log("Connected to MongoDB successfully");
})

async function connectToMongoDB() {
  await mongoose.connect(mongoURI);
}

module.exports = connectToMongoDB;