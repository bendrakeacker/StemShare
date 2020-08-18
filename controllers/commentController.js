const db = require("../models");

module.exports = {
    findAll: (req, res) => {
        db.Post.find({})
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },
    findById: (req, res) => {
        db.Comment.find({id: req.params.id})
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },
    create: (req, res) => {
        db.Comment.create(req.body)
            .then(data => res.json(data))
            .catch(err => res.json(err));
    }
}