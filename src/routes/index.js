var express = require("express");
var router = express.Router();
var path = require("path");

router.get("/", function (req, res) {
    res.redirect("/home.html");
});

router.get("/home", function (req, res) {
    res.redirect("/home.html");
});


router.get("/cadastro", function (req, res) {
    res.redirect("/cadastro.html");
});

router.get("/login", function (req, res) {
    res.redirect("/login.html");
});

module.exports = router;