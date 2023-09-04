// const { MongoDBCollectionNamespace } = require("mongodb");
// const mongoose = require("mongoose");
// mongoose.connect(
//   "mongodb://127.0.0.1:27017",
//   {
//     dbName: "EcomsiteDB",
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   },
//   (err) =>
//     err ? console.log(err) : console.log("Connected to Ecomsite database")
// );

const mongoose = require('mongoose');
const mongoURI = "mongodb://127.0.0.1:27017"

mongoose.connect("mongodb://127.0.0.1:27017").then(response => {
    console.log("mongo");
})






// const connectToMongo = async () => {
// try {
//     mongoose.set('strictQuery', false)
//     mongoose.connect("mongodb://127.0.0.1:27017") 
//     console.log('Mongo connected')
// }
// catch(error) {
//     console.log(error)
//     process.exit()
// }
// }
// module.exports = connectToMongo;



const RegisterSchema = mongoose.Schema({
    username: {
      type: String,
      unique: true,
      requied: true,
    },
    email: {
      type: String,
      unique: true,
      requied: true,
    },
    password: {
      type: String,
      requied: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  });
  
  exports.module = Register = mongoose.model("Register", RegisterSchema);