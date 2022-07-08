const { Router } = require('express');
const candidatesController = require('../../controllers/candidate.controller');
const { authenticated, isAdmin } = require("../../middlewares/verifytoken");

const router = Router();

router.post("/", authenticated, isAdmin, candidatesController.createCandidate);

router.get(
  "/poll/:pollId",
  authenticated,
  candidatesController.getCandidatesByPoll
);

router.get("/", authenticated, candidatesController.getAllCandidates);
router.get("/:id", authenticated, candidatesController.getCandidateById);

module.exports = router;
