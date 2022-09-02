import db from "../models/index";
require('dotenv').config();

let createNewSpecialty = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.name
                || !data.descriptionHTML
                || !data.descriptionMarkdown
                || !data.imageBase64) {
                resolve({
                    errCode: 1,
                    message: 'Missing parameter'
                })
            } else {

                await db.Specialty.create({
                    name: data.name,
                    image: data.imageBase64,
                    descriptionMarkdown: data.descriptionMarkdown,
                    descriptionHTML: data.descriptionHTML
                })

                resolve({
                    errCode: 0,
                    message: 'Save new specialty succeed!'
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

let getAllSpecialty = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let data = await db.Specialty.findAll({});

            if (data && data.length > 0) {
                data.map(item => {
                    item.image = new Buffer(item.image, 'base64').toString('binary');
                    return item;
                })
            }

            resolve({
                errCode: 0,
                message: 'Ok!',
                data
            })
        } catch (e) {
            reject(e)
        }
    })
}

let getDetailSpecialtyById = (id, location) => {
    return new Promise(async (resolve, reject) => {
        try {
            let data = await db.Specialty.findOne({
                where: {
                    id: id,
                },
                attributes: ['descriptionHTML', 'descriptionMarkdown'],
            });

            if (data) {
                let doctorSpecialty = [];
                if (location === 'ALL') {
                    doctorSpecialty = await db.Doctor_Infor.findAll({
                        where: { specialtyId: id },
                        attributes: ['doctorId', 'provinceId']
                    })
                } else {
                    doctorSpecialty = await db.Doctor_Infor.findAll({
                        where: {
                            specialtyId: id,
                            provinceId: location
                        },
                        attributes: ['doctorId', 'provinceId']
                    })
                }

                data.doctorSpecialty = doctorSpecialty;
            } else data = {}

            resolve({
                errCode: 0,
                message: 'Ok!',
                data
            })
        } catch (e) {
            reject(e)
        }
    })
}

module.exports = {
    createNewSpecialty: createNewSpecialty,
    getAllSpecialty: getAllSpecialty,
    getDetailSpecialtyById: getDetailSpecialtyById,
}