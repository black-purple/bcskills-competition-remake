import Router from "express";
import { newPatient } from "../controllers/patientController.js";
import { newTreatment } from "../controllers/treatmentController.js";

const router = Router();

router.post("/patient", newPatient);
router.post("/treatment", newTreatment);


export { router as newEntitiesRoute }
