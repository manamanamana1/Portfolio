const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();

app.use(express.static(path.join(__dirname, './build')))



app.use("*", function(req, res) {
        res.sendFile(path.join(__dirname, './build'))
    })
    // port
const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server is running on port ${port}`));