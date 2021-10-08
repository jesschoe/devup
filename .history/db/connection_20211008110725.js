import  mongoose  from "mongoose";

let MONGODB_URI = 
process.env.PROD_MONGODB || "mongodb://127.0.0.1:27017/DevUpDatabase"
mongoose.set("returnOriginal", false)
mongoose
.connect(MONGODB_URI, {useUnifiedTopology: true, useNewUrlParser: true })
.catch((error) => console.error("error connecting to mongodb: ", error.message))
mongoose.connection.on("disconnected", () => console.log("disconnected from mongoDB"))
mongoose.connection.on()
