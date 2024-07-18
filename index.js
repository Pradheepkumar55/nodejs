import express from 'express';
import cors from 'cors';


const app= express()
app.use (cors())
const PORT=4000
app.get ('/first',(req ,res ) =>{
    res.status(200).json({message:"wellcom back codding world"})

})




app.listen(PORT,()=>{
    console.log("App is listing in the port:",PORT);
})