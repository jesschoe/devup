import  mongoose  from "mongoose";

let MONGODB_URI = 
process.env.Prod_MONGODB || "mongodb://127.0.0.1:27017/Dev.Databa"