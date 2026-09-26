const express = require("express")
const app = express();
const multer = require("multer");
const uploadFile = require("./services/storage.service");
const postModel = require("./models/note.model")

app.use(express.json())

const upload = multer({ storage: multer.memoryStorage() })



app.post("/create-post", upload.single("image"), async (req, res) => {
    const result = await uploadFile(req.file.buffer)


    const post = await postModel.create({
        image: result.url,
        caption: req.body.caption
    })

    res.status(201).json({
        message: "Posts created successfully",
        post
    })
})




module.exports = app;