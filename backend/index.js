import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { newEntitiesRoute, editEntitiesRoute, getEntitiesRoute } from "./routes/routes.env.js";
import { db } from "./db/dbConnection.js";

dotenv.config();
const app = express();

const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access control allow credentials
    optionSuccessStatus:200
}
app.use(cors(corsOptions));

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