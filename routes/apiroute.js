const router = require('express').Router()
const fs = require('fs')
let dbJson = require('../db/db.json')


router.get('/notes',(req,res) =>{
    dbJson = JSON.parse(fs.readFileSync('./db/db.json','utf-8'))
    res.json(dbJson)
})
router.post("/notes", (req, res) => {
    let newNoteModel = {
    title: req.body.title,
    text: req.body.text,
    id: Math.floor(Math.random()*10000000)
    }
    dbJson.push(newNoteModel)
    fs.writeFileSync("./db/db.json", JSON.stringify(dbJson))
    res.json(dbfile)
    })

module.exports = router