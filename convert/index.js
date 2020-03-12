const express = require('express');
const router = express.Router();
const Urls = require('../models/urls')

router.post('/save', (req,res) => {
    console.log(req.body);
    const { link } = req.body;

    const newInsert = new Urls({
        '_id': '',
        'url': link,
        'date': Date.now()
    })
    newInsert.save((err, linkString) => {
        if(err) {
            console.log('nope')
            console.log(err)
        } else {
            console.log('gucci')
        }
    })
})

module.exports = router;