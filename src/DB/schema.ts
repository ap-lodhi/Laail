import * as mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  Id: {
    type: String,
    required: true,
    unique: true
  },
  Name: {
    type: String,
    required: true
  },
  MobileNumber: {
    type: Number,
    required: true
  },
  Location:{
    type:String,
    required:true,
  },
  Email:{
    type:String,
    required:true
  }
  
});

const User = mongoose.model('User', userSchema);



export default {User}