import express from "express";
import dotenv from "dotenv";
import { db } from "./db/dbConnection.js";
dotenv.config();

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).json({ status: "Working" });
});

db.sync({ force: true });

const port = process.env.PORT || 8000;
app.listen(port, () => { console.log("Listening on port", port); });