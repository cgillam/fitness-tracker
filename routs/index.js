const router = require("express-promise-router")()

router.use("/api/workouts", require("./workouts"));
router.use(require("./use"));

module.exports = router;