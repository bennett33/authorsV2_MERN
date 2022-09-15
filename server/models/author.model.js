const mongoose = require('mongoose');
const AuthorSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [
            true,
            "First name is required"
        ],
        minlength: [3, "First Name must be at least 3 characters"]
    },
    lastName: {
        type: String,
        required: [
            true,
            "Last name is required"
        ],
        minlength: [3, "Last Name must be at least 3 characters"]
    }
}, { timestamps: true });
module.exports.Author = mongoose.model('Author', AuthorSchema);

