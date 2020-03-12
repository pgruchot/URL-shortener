const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Counter = require('./counter');

//Declaring collection schema
const urlSchema = new Schema ({
    _id: {
        type: Number,
    },
    url: {
        type: String,
        required: true
    },
    date: {
        type: Date,
    }
})

//adding auto-incremented id before saving to database
urlSchema.pre('save', async function() {
    if(!this.isNew) return;

    const incrementedValue = await Counter.increment('urlId');
    this._id = incrementedValue;
});

const Urls = mongoose.model('Urls', urlSchema);
module.exports = Urls;
