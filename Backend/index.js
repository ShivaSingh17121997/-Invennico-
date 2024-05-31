const express = require('express');
const cors = require('cors');
const { connection } = require('./db.js');
const { router } = require('./Routes/form.routes.js');

const app = express();
app.use(cors()); // Enable CORS
app.use(express.json());

app.use("/userDetails", router); // Use the router middleware for the specified route

const port = 8090; // Corrected port definition

app.listen(port, async () => {
    try {
        await connection;
        console.log(`Server is running on port ${port}`);
    } catch (err) {
        console.error(err);
    }
});
