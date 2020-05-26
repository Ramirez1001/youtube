const express = require("express");
const router = express.Router();
const path = require("path");
const youtube = require("youtube-dl");

router.get("/", (req, res, next) => {
    res.render("index");
});
router.post("/download", (req, res, next) => {
    if(req.body.url == "" || req.body.url == null) return res.redirect("/");
    const Youtube = new youtube(req.body.url);
    Youtube.on("info", (info) => {
     //   console.log(info);
        res.render("download", {info});
    });
})

router.use("/", (req, res, next) => {
    res.status(404).json({ok: false, msg: "Page not found bitch of shit"});
});

module.exports = router;