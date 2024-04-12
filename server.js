const express = require('express')
const path = require('path')

const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

const {mergepdfs} = require("./mergepd")

const app = express()
app.use('/static', express.static('public'))
const port = 3000

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "templates/index.html"))
})

app.post('/merge', upload.array('pdfs', 33), async (req, res, next) => {
    // console.log(req.files.length)

    let w = []
    for (let i = 0; i < req.files.length; i++){
        // console.log(req.files[i].path)
        w.push(path.join(__dirname, req.files[i].path))
    }

    // req.files is array of `photos` files
    // req.body will contain the text fields, if there were any

    // let d = await mergepdfs(path.join(__dirname, req.files[0].path), path.join(__dirname, req.files[1].path))
    let d = await mergepdfs(w)
    // res.send({data: req.files})
    res.redirect(`http://localhost:3000/static/${d}.pdf`)
  })

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})