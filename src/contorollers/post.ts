import { Request, Response, } from 'express';



const  test  = async (req:Request ,res:Response )=>{
    return res.json({
        data:"hii "
    })
}
export default{test};