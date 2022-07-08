const { Router } = require('express');
const pollsController = require('../../controllers/poll.controller');
const { authenticated, isAdmin } = require("../../middlewares/verifytoken");

const router = Router();

router.get("/", authenticated, pollsController.getPolls);
router.post("/", authenticated, isAdmin, pollsController.createPoll);
router.get("/:status", authenticated, pollsController.getPollsByStatus);
router.post(`/candidate/vote`, authenticated, pollsController.voteCandidate);

module.exports = router;
