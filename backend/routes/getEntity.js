import Router from "express";
import { getPatient } from "../controllers/patientController.js";
import { getPatientTreatments } from "../controllers/treatmentController.js";

const router = Router();

router.get("/patient/:cin", getPatient);
router.get("/treatment/:cin", getPatientTreatments);


export { router as getEntitiesRoute }
