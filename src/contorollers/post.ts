import { Request, Response, } from 'express';
import schema from '../DB/schema';



 // this  is the  the user  create route  here new  user  can added
const user = async (req: Request, res: Response) => {

    const { name, mobileNumber, email, location  ,user_id} = req.body;
//     const body: Body = request.body as Body;
// const { name, email, password } = body;
    console.log(req.body)
    const user1 = await schema.User.findOne({ email })

    if (user1) {
        return res.status(400).send({
            response: "error",
            message: "User already added"
        })
    } else {

        await schema.User.create({
            name,
            mobileNumber,
            email,
            location,
            user_id
        })

        return res.status(200).send({
            response: "success",
            message: 'user added  Successfuly'
        })
    }



   
}


//  
//   contract   route   

const contract= async (req: Request, res: Response) => {
    const {contract_id, lender_id,borrower_id,principle,interest,loan_start_date,loan_due_date,is_repaid}=req.body
          
    await schema.contract.create({
            contract_id, 
            lender_id,
            borrower_id,
            principle,
            interest,
            loan_start_date,
            loan_due_date
            ,is_repaid
           })
           return res.status(200).send({
            response: "success",
            message: 'contract  created Successfuly'
        })
}

// lender  route  
const lender =async(req:Request,res:Response)=>{
    const {name} =req.body

    const lenders = await schema.Lender.findOne({ name })
    if(lenders){
        return res.status(400).send({
            response: "error",
            message: "lender already exists"
        })
    }else {

        await schema.Lender.create({
            name
        })
    }
    
    return res.status(200).send({
        response: "success",
        message: 'lender added  Successfuly'
    })
}


// barrower 
const barrower =async(req:Request,res:Response)=>{
    const {name} =req.body

     const  barrower = await schema.Barrower.findOne({name}) 
     
     if(barrower){
        return res.status(400).send({
            response: "error",
            message: "barrower already exists"
        })
     }else{

         await schema.Barrower.create({
             name
         })
     }
     return res.status(200).send({
        response: "success",
        message: 'barrower added  Successfuly'
    })
}





export default { user,contract,lender, barrower};