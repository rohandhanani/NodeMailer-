const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
const router = require("./routes/router")
const port = 8000;

app.use(express.json());

app.use("/auth", router);

app.listen(port, (req, res) => {
    console.log(`your port ${port} is running..`);
})