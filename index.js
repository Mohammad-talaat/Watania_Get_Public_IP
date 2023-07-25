
/* ---------------- Getting necessary packages and Modules ----------- */


const cors = require('cors');
const morgan = require('morgan');
const express = require('express');

/* ----------------- Getting Routers --------------------- */
const apiRoutes = require('./routes/api')

/* ---------------- Using the packages ------------------ */

const app = express();
  
/* ---------------- Using Middlewares ------------------------------------ */

app.use(cors()); //specify later the url of the deployed frontend project
app.use(express.json());
app.use(morgan("tiny"));


/* ----------------------- MiddleWares------------------------------------ */

app.use('/publicIP',apiRoutes)

/* ----------------------- Routes ------------------------------------ */
app.get('/',(req,res)=>{
    res.status(200).json({msg:'Server is working'})
})


/* ----------------------- Starting the server ------------------ */

const startServer = async ()=>{
    try {
        /* connect to DB */
        app.listen(4000,()=>{
            console.log(`The server is now running on port: 4000`)
        })
    } catch (error) {  
        console.log(error)
    }
}
startServer()

