import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).json({status : "Working"});
});


const port = process.env.PORT || 8000;
app.listen(port, () => {console.log("Listening on port", port);});