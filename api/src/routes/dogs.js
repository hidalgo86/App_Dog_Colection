const { Router } = require("express");
const { dogsAll, dogsApi, dogsDb, dogCreate, dogUpdate, dogDelete} = require("../controllers/dogs")

const router = Router();

router.get("/dogsAll", dogsAll );
router.get("/dogsApi", dogsApi );
router.get("/dogsDb", dogsDb );
router.post("/dogCreate", dogCreate );
router.put("/dogUpdate/:id", dogUpdate)
router.delete("/dogDelete/:id", dogDelete );

module.exports = router;
