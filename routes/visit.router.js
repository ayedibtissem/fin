
const express = require("express");
const router = express.Router();

const visitController = require("../controllers/visit.controller");



router.post("/", auth,visitController.createVisit);
router.get("/", visitController.getVisits);
router.get("/:id",visitController.getVisits)
router.delete("/:id", auth, visitController.deleteVisit);
router.put("/:id", auth, visitController.updateVisit);

module.exports = router;
