import specialtyService from "../services/specialtyService";

let createNewSpecialty = async (req, res) => {
    try {
        let doctor = await specialtyService.createNewSpecialty(req.body);
        return res.status(200).json(doctor);
    } catch (e) {
        console.log(e);
        return res.status(200).json({
            errCode: -1,
            message: 'Error from server...'
        })
    }
}

let getAllSpecialty = async (req, res) => {
    try {
        let doctor = await specialtyService.getAllSpecialty();
        return res.status(200).json(doctor);
    } catch (e) {
        console.log(e);
        return res.status(200).json({
            errCode: -1,
            message: 'Error from server...'
        })
    }
}

let getDetailSpecialtyById = async (req, res) => {
    try {
        let doctor = await specialtyService.getDetailSpecialtyById(req.query.id, req.query.location);
        return res.status(200).json(doctor);
    } catch (e) {
        console.log(e);
        return res.status(200).json({
            errCode: -1,
            message: 'Error from server...'
        })
    }
}

module.exports = {
    createNewSpecialty: createNewSpecialty,
    getAllSpecialty: getAllSpecialty,
    getDetailSpecialtyById: getDetailSpecialtyById
}