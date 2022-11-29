import express from "express";
import dotenv from "dotenv";
import { newEntitiesRoute, editEntitiesRoute, getEntitiesRoute } from "./routes/routes.env.js";
import { db } from "./db/dbConnection.js";

dotenv.config();
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).json({ status: "Working" });
});

db.sync();

app.use("/new", newEntitiesRoute);
app.use("/edit", editEntitiesRoute);
app.use("/get", getEntitiesRoute);

const port = process.env.PORT || 8000;
app.listen(port, () => { console.log("Listening on port", port); });