import { Patient } from "../models/Patient.js";

async function newPatient(req, res) {
    const { cin, profession, address, fullname, birthdate, alerts, guardian, insurance, tel, sexe, ssn } = req.body;
    const newPatient = Patient.build({ cin: cin.toUpperCase(), profession, address, fullname, birthdate, alerts, guardian, insurance, tel, sexe, ssn });
    await newPatient.save();
    res.status(200).json(newPatient);
}

async function getPatient(req, res) {
    const { cin } = req.params;
    const foundPatient = await Patient.findOne({ where: { cin: cin.toUpperCase() } })
    res.status(200).json(foundPatient?.toJSON());
}

async function getAllPatients(req, res) {
    //TODO add pagination
    const patients = await Patient.findAll({where: {archived : false}});
    res.status(200).json(patients?.toJSON());
}

async function getAllArchivedPatients(req, res) {
    //TODO Add paginatio
    const archivedPatients = await Patient.findAll({where: {archived : true}});
    res.status(200).json(archivedPatients?.toJSON());
}

async function editPatient(req, res) {
    const { profession, address, fullname, birthdate, alerts, guardian, insurance, tel, sexe, ssn } = req.body;
    const { cin } = req.params;
    await Patient.update(
        { profession, address, fullname, birthdate, alerts, guardian, insurance, tel, sexe, ssn },
        { where: { cin } }
    );
    const foundPatient = await Patient.findOne({ where: { cin } });
    res.status(200).json(foundPatient);
}

async function archivePatient(req, res) {
    const { cin } = req.params;
    await Patient.update(
        { archived: 1 },
        { where: { cin } }
    );
    const foundPatient = await Patient.findOne({ where: { cin } });
    res.status(200).json(foundPatient);
}

export {
    newPatient,
    editPatient,
    getPatient,
    getAllPatients,
    getAllArchivedPatients,
    archivePatient
}