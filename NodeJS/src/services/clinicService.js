import db from "../models/index";
require('dotenv').config();

let createClinic = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.name || !data.address
                || !data.descriptionHTML
                || !data.descriptionMarkdown
                || !data.imageBase64) {
                resolve({
                    errCode: 1,
                    message: 'Missing parameter'
                })
            } else {

                await db.Clinic.create({
                    name: data.name,
                    address: data.address,
                    image: data.imageBase64,
                    descriptionMarkdown: data.descriptionMarkdown,
                    descriptionHTML: data.descriptionHTML
                })

                resolve({
                    errCode: 0,
                    message: 'Save new clinic succeed!'
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

let getAllClinic = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let data = await db.Clinic.findAll({});

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

let getDetailClinicById = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let data = await db.Clinic.findOne({
                where: {
                    id: id,
                },
                attributes: ['name', 'address', 'descriptionHTML', 'descriptionMarkdown'],
            });

            if (data) {
                let doctorClinic = [];
                doctorClinic = await db.Doctor_Infor.findAll({
                    where: { clinicId: id },
                    attributes: ['doctorId', 'provinceId']
                })

                data.doctorClinic = doctorClinic;
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
    createClinic: createClinic,
    getAllClinic: getAllClinic,
    getDetailClinicById: getDetailClinicById,
}