import { Request, Response, } from 'express';
import schema from '../DB/schema';



 // this  is the  the user  create route  here new  user  can added
const user = async (req: Request, res: Response) => {

    let { Name, MobileNumber, Email, Location  ,Id} = req.body.body
//     const body: Body = request.body as Body;
// const { name, email, password } = body;
    console.log(Name)
    const user1 = await schema.User.findOne({ Email })

    if (user1) {
        return res.status(400).send({
            response: "error",
            message: "User already register"
        })
    } else {

        await schema.User.create({
            Name,
            MobileNumber,
            Email,
            Location,
            Id
        })

        return res.status(200).send({
            response: "success",
            message: 'user sign up Successfuly'
        })
    }



   
}


export default { user};