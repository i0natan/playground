const express = require('express')
const app = express();
var router = express.Router()

router.get('/' , (req,res,next)=>{
    console.log(req.headers[''])
})

app.use((req,res,next)=>{
});