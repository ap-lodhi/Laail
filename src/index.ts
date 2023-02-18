import express from 'express';
 import contoroller from "./contorollers/post"
  const app = express();
  const PORT = 8080;

  
    app.get('/test' ,contoroller.test)

  app.listen(PORT,():void=>{
console.log(`server is runnig  on ${PORT}`)
  })