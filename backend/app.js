const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express()
const multer = require('multer');
const imageDB = require('./models/db');

app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())

app.use('/my-uploads',express.static('my-uploads'))

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './my-uploads')
    },
    filename: function (req, file, cb) {
      cb(null,file.originalname)
    }
})
  
const upload = multer({ storage: storage })

app.post('/upload',upload.single('image'),async (req,res)=>{
    if(!req.file){
        res.status(400).send('No File Uploaded');
    }
    const imageDb = new imageDB({
        fileName:req.file.filename,
        path:req.file.path
    })
    await imageDb.save()
    res.status(200,req.body).json({message:'File Uploaded Successfully',image:imageDB})
})

app.get('/images',async(req,res)=>{
    try{
        const findingImage = await imageDB.find()
        res.json(findingImage);
    }
    catch(e){
        res.status(500).send('Something Went Wrong')
    }
})

app.listen(5000,()=>{
    console.log('The Port is listening on 5000');
})