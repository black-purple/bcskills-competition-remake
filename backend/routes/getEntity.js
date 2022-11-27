import Router from "express";
import { getPatient } from "../controllers/patientController.js";

const router = Router();

router.get("/patient/:cin", getPatient);
// router.post("/treatment", newTreatment);


export { router as getEntitiesRoute }
