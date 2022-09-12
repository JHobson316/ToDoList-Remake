const express = require("express")
const app = express();
const PORT = 3005

const tasks = require("./routes/tasks");

app.get("/", (req, res) => {
    console.log(`Listening on port ${PORT}!`)
    res.send("Hello")
})

app.use("/tasks", tasks)

app.listen(PORT)