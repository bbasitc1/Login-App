const mongoose = require('mongoose');
const db = "mongodb+srv://basit:basitbasit@cluster0.sjei4.mongodb.net/test?retryWrites=true&w=majority"
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex:true
    })

    console.log(`MongoDB Connected: ${conn.connection.host}`)
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

module.exports = connectDB;
