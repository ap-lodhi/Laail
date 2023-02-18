import * as mongoose from "mongoose";



const uri = 'mongodb://127.0.0.1:27017/laail'
async function connectDataBase() {

    return  mongoose.connect(uri,(err:any)=>{
        if(err){
            console.log(err.message)
        }else{
            console.log("successfully connected")
        }
    })
       
        


    
}

export default  { connectDataBase};