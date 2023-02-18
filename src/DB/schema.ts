import * as mongoose from "mongoose";
import { Schema, model, Types } from 'mongoose';

const userSchema = new mongoose.Schema({
  user_id: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  mobileNumber: {
    type: Number,
    required: true
  },
  location:{
    type:String,
    required:true,
  },
  email:{
    type:String,
    required:true
  }
  
});


const contractSchema=new mongoose.Schema({
    contract_id: { 
        type: Number, 
        required: true 
    },
    lender_id: { 
        type: Schema.Types.ObjectId, 
        ref: 'User', 
        required: true 
    },
    borrower_id: { 
        type: Schema.Types.ObjectId, 
        ref: 'User', 
        required: true 
    },
    principle: { 
        type: Number, 
        required: true 
    },
    interest: { 
        type: Number, 
        required: true 
    },
    loan_start_date: { 
        type: Date, 
        required: true 
    },
    loan_due_date: { 
        type: Date, 
        required: true 
    },
    is_repaid: { 
        type: Boolean, 
        required: true 
    },
    created_at: { 
        type: Date, 
        default: Date.now()
    },
    updated_at: { 
        type: Date, 
        default: Date.now()
    }
  })
  
  const  lenderSchema = new mongoose.Schema({
     name:{
        type:String,
        required:true
     }
  })

  
  const  barrowerSchema = new mongoose.Schema({
    barrower_name:{
       type:String,
       required:true
    }
 })

  
const  Lender =mongoose.model('lender',lenderSchema)
const  Barrower =mongoose.model('barrower',barrowerSchema)
const  contract=mongoose.model("contract", contractSchema);

const User = mongoose.model('user', userSchema);



export default {User, contract ,Lender, Barrower}