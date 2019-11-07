const mongoose = require ('mongoose');

const postSchema = mongoose.Schema({
    distancia: String,
    date: {
        type: Date,
        default: Date.now
    }
});



module.exports = mongoose.model('Posts', postSchema);
