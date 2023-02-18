import express from 'express';
 import contoroller from "./contorollers/post"
  const app = express();
  const PORT = 8080;

  
    app.post('/addUser' ,contoroller.user)

  app.listen(PORT,():void=>{
console.log(`server is runnig  on ${PORT}`)
  })