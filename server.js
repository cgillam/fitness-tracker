const express = require("express")
const bodyParser = require("body-parser")
const moragan = require("morgan")
const db = require("./modles")
const routes = require("./routs")

const PORT = process.env.PORT || 3000
const app = express()
app.use(moragan("common"))
app.use(express.static("public"))
app.use(bodyParser.json())
app.use(routes)

app.listen(PORT, () => {
    console.log(`listening @ http://localhost:${PORT}`);
    db.connect().then(
        () => console.log("database.connection estabilshed"),
        (error) => console.error(`failed to connect to database`, error)
    );
})