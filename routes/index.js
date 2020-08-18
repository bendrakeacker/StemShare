const router = require("express").Router();
const commentController = require("../controllers/commentController");

router.route("/api/dashboard")
    .get(commentController.findAll)
    .post(commentController.create);

router.route("/api/dashboard/:id")
    .get(commentController.findById)
    
module.exports = router;