const { Router } = require("express");

const requireAuth = require("../middleware/requireAuth");

const router = Router();

//use auth middleware
router.use(requireAuth);

router.get("/products", () => {});

module.exports = router;
