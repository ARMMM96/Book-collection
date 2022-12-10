const router = require("express").Router()

router.get("/", (req, res) => res.render("allBooks"));



module.exports = router