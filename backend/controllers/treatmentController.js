import { Treatment } from "../models/Treatment.js";

async function newTreatment(req, res) {
    const { doctorname, consultationdate, consultationdetails, conclusion, decision, PatientFolderid } = req.body;
    const newTreatment = Treatment.build({ doctorname, consultationdate, consultationdetails, conclusion, decision, PatientFolderid });
    await newTreatment.save();
    res.status(200).json(newTreatment);
}

async function getPatientTreatments(req, res) {
    const { cin } = req.params;
    const Treatments = await Treatment.findAll({ where: { patient: cin } });
    res.status(200).json(Treatments?.toJSON());
}

async function editTreatment(req, res) {
    const { doctorname, consultationdate, consultationdetails, conclusion, decision } = req.body;
    const { treatmentid } = req.params;
    await Treatment.update(
        { doctorname, consultationdate, consultationdetails, conclusion, decision },
        { where: { treatmentid } }
    );
    const foundTreatment = await Treatment.findOne({ where: { treatmentid } });
    res.status(200).json(foundTreatment);
}

export {
    newTreatment,
    editTreatment,
    getPatientTreatments
}