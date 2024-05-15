const express = require("express");
const router = express.Router();
const formControl = require("../Controllers/formcontroller");

router.post("/post", formControl.post);
router.get("/get", formControl.getData);

module.exports = router;
