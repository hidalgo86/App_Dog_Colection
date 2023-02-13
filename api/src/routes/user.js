"use strict";

const {Router} = require("express");
const {userAll, userCreate, userUpdate, userDelete} = require("../controllers/user");

const router = Router();

router.get("/user", userAll);
router.post("/userCreate", userCreate);
router.put("/userUpdate/:id", userUpdate);
router.delete("/userDelete/:id", userDelete);

module.exports = router;