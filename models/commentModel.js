const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    contents: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    id: {
        type: String,
        required: true
    }
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;