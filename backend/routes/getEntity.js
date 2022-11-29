import Router from "express";
import { getAllArchivedPatients, getAllPatients, getPatient } from "../controllers/patientController.js";
import { getPatientTreatments } from "../controllers/treatmentController.js";

const router = Router();

router.get("/patient/:cin", getPatient);
router.get("/patients", getAllPatients);
router.get("/patients/archived", getAllArchivedPatients);
router.get("/treatment/:cin", getPatientTreatments);

export { router as getEntitiesRoute }
