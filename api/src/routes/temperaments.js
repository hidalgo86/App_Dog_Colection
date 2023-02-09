const { Router } = require("express");
const temperament = require("../controllers/temperaments")

const router = Router()

router.get("/temperaments", temperament);

module.exports = router