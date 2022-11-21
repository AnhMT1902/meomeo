import express from "express";
import fileUpload from "express-fileupload"
import mongoose from "mongoose";

const app = express()
app.use(fileUpload({
    createParentPath: true
}))
app.use(express.static('public'));
app.use(express.json())
mongoose.connect('mongodb://127.0.0.1:27017/').then(() => {
    console.log('connected')
}).catch((err) => {
    console.log(err)
})

app.listen(3000, () => {
    console.log('server running localhost 3000')
})