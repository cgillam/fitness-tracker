const path = require("path")

const router = require("express-promise-router")()

const sendPublicFile = (response, relativePath) => response.sendFile(path.join(__dirname, relativePath))

router.get("/exercise", (request, response) => sendPublicFile(response, "../public/exercise.html"));
router.get("/stats", (request, response) => sendPublicFile(response, "../public/stats.html"));


module.exports = router;