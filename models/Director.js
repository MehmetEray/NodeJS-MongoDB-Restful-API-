const mongoose = require('mongoose')
const Schema = mongoose.Schema
const DirectorSchema = new Schema({
    name: {
        type: String,
        maxlength: [25, '`{PATH}` alanı (`{VALUE}`), ({MAXLENGTH}) karakterden küçük olmalıdır '],
        minlength: [3, '`{PATH}` alanı (`{VALUE}`), ({MINLENGTH}) karakterden büyük olmalıdır.']
},
surname: {
    type: String,
        maxlength: 30,
        minlength: 1,
    },
bio: {
        type: String,
        maxlength: 30,
        minlength: 1,
    },
createdAt: {
    type: Date,
    default: Date.now
}
})
module.exports = mongoose.model('director',DirectorSchema)