"use strict";

const { Router } = require("express");
const { dogAll, dogApi, dogDb, dogCreate, dogUpdate, dogDelete} = require("../controllers/dog");
const validateToken = require("../middleware/validateToken");

const router = Router();

router.get("/dogAll", dogAll );
router.get("/dogApi", dogApi );
router.get("/dogDb", dogDb );
router.post("/dogCreate", dogCreate );
router.put("/dogUpdate/:id", validateToken, dogUpdate)
router.delete("/dogDelete/:id", validateToken, dogDelete ); 

module.exports = router;
 