const mongoose = require('mongoose');
const Joi = require('joi');

const genreSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: 5,
        maxlength: 50,
        required: true
    }
});
const Genre = mongoose.model('Genre', genreSchema);
/**
 * Validates genre request body
 * @function validate
 * @param {Object} genre - A genre object to validated
 * @returns {Joi.ValidationResult} 
*/
function validateGenre(genre) {
    const schema = Joi.object({
        name: Joi.string().min(3).required()
    });
    return schema.validate(genre);
}


module.exports.Genre = Genre;
module.exports.validate = validateGenre;
module.exports.genreSchema = genreSchema;