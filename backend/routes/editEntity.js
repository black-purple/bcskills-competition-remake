import Router from "express";
import { archivePatient, editPatient } from "../controllers/patientController.js";
import { editTreatment } from "../controllers/treatmentController.js";

const router = Router();

router.put("/treatment/:cin", editTreatment);
router.put("/patient/:cin", editPatient);
router.put("/patient/archive/:cin", archivePatient);


export { router as editEntitiesRoute }
