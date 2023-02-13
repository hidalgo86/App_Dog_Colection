"use strict";

const { Router } = require("express");
const Authorization = require("../controllers/authorization");

const router = Router();

router.post("/authorization", Authorization);

module.exports = router;
