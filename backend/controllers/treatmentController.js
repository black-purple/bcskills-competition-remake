import { Treatment } from "../models/Treatment.js";

async function newTreatment(req, res) {
    const { doctorname, consultationdate, consultationdetails, conclusion, decision, patient } = req.body;
    const newTreatment = Treatment.build({ doctorname, consultationdate, consultationdetails, conclusion, decision, patient });
    await newTreatment.save();
    res.status(200).json(newTreatment);
}

async function getPatientTreatments(req, res) {
    const { cin } = req.params;
    let Treatments = await Treatment.findAll({ where: { patient: cin } });
    // res.status(200).json(Treatments?.toJSON());
    res.status(200).json(Treatments)
}

async function editTreatment(req, res) {
    const { treatmentid, doctorname, consultationdate, consultationdetails, conclusion, decision } = req.body;
    // const { treatmentid } = req.params;
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