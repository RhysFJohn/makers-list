const express = require("express");
const router = express.Router();
const multer = require("multer")();

const ListingsController = require("../controllers/listings");

router.get("/", ListingsController.Index);
router.post("/", multer.array('img', 6), ListingsController.Create);
router.get("/new", ListingsController.New);

module.exports = router