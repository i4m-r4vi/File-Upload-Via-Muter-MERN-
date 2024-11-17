const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/myImages')
    .then(() => {
        console.log('The Mongodb is Connected');
    })
    .catch(e=>console.log(e))

const myImagedb = new mongoose.Schema({
    fileName:{
        type:String,
        required:true
    },
    path:{
        type:String,
        required:true
    }
})

const imageDB = mongoose.model('myImages', myImagedb)
module.exports = imageDB