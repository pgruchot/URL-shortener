const express = require('express');
const router = express.Router();
const Urls = require('../models/urls')

//Encoding object
const base62 = {
    charset: '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
      .split(''),

    encode: integer => {
      if (integer === 0) {
        return 0;
      };
      let s = [];
      while (integer > 0) {
        s = [base62.charset[integer % 62], ...s];
        integer = Math.floor(integer / 62);
      };
      return s.join('');
    },
    
    decode: chars => chars.split('').reverse().reduce((prev, curr, i) =>
      prev + (base62.charset.indexOf(curr) * (62 ** i)), 0)
};

//Route used to save posted links in database and encode id
router.post('/', (req,res) => {

    const { link } = req.body;

    const newInsert = new Urls({
        '_id': '',
        'url': link,
        'date': Date.now()
    });

    newInsert.save((err, doc) => {
        if(err) {
            console.log('Couldn\'t save in database');
            console.log(err);
        } else {
            return res.json({
                'encodedUrl': base62.encode(doc._id)
            });
        };
    });
    
});

//Route used to decode shortened url
router.get('/:shortenedUrl', (req, res) => {

    console.log(req.params);

    let decodedUrl = base62.decode(req.params.shortenedUrl);

    Urls.findOne({'_id': decodedUrl}, (err, match) => {
        if(match)
            return res.json({
                'url': match.url 
            });
        else
            return res.json({
                'err': 'Cant find URL in database'
            })
    });
});

module.exports = router;