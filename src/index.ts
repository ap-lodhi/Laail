import express from 'express';
 import contoroller from "./contorollers/post"
 import db from './DB/db';
  const app = express();
  app.use(express.json());
  const PORT = 8080;

  // all the  Routes  are  her e
    app.post('/addUser' ,contoroller.user)
    app.post('/addContract' ,contoroller.contract)
    app.post('/addlender' ,contoroller.lender)
    app.post('/addbarrower' ,contoroller.barrower)
    // app.get("/")

  app.listen(PORT,():void=>{
    db.connectDataBase()
console.log(`server is runnig  on ${PORT}`)
  })