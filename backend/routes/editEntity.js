import Router from "express";
import { archivePatient, editPatient } from "../controllers/patientController.js";

const router = Router();

router.put("/patient/:cin", editPatient);
router.put("/patient/archive/:cin", archivePatient);


export { router as editEntitiesRoute }
