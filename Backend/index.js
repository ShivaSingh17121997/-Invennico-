const express = require("express");
const { userRouter } = require("./Routes/users.routes");

const app = express();
const { connection } = require('../db');

const port = 9090;
app.use(express.json());

app.use("/", userRouter);

app.listen(port, async () => {
    await connection;
    console.log("Server is running at port 8080")
});
