const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const router = require("./routes");
const cors = require('cors')
const port = process.env.PORT || 3000;

app.use(cors({
    origin: 'http://localhost:5173'
}))
app.use(bodyParser.json());
app.use("/", router);

app.listen(port);
