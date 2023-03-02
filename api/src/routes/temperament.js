"use strict";

const { Router } = require("express");
const temperament = require("../controllers/temperament")

const router = Router()

router.get("/temperaments", temperament);

module.exports = router