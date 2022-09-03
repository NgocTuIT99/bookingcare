import axios from '../axios';

const handleLoginApi = (email, password) => {
    return axios.post('/api/login', { email, password });
}

const getAllUserService = (inputId) => {
    return axios.get(`/api/get-all-users?id=${inputId}`);
}

const createNewUserService = (data) => {
    return axios.post('/api/create-new-user', data);
}

const editUserService = (data) => {
    return axios.put('/api/edit-user', data);
}

const deleteUserService = (id) => {
    return axios.delete('/api/delete-user', {
        data: {
            id: id
        }
    });
}

const getAllCodeService = (inputType) => {
    return axios.get(`/api/allcode?type=${inputType}`);
}

const getTopDoctorHomeService = (limit) => {
    return axios.get(`/api/top-doctor-home?limit=${limit}`);
}

const getAllDoctorService = () => {
    return axios.get(`/api/get-all-doctor`);
}

const saveInforDoctorService = (data) => {
    return axios.post(`/api/save-infor-doctor`, data);
}

const getInforDoctor = (id) => {
    return axios.get(`/api/get-infor-doctor-by-id?id=${id}`);
}

const saveBulkScheduleDoctor = (data) => {
    return axios.post(`/api/bulk-create-schedule`, data);
}

const getScheduleDoctorByDate = (id, date) => {
    return axios.get(`/api/get-schedule-doctor-by-date?doctorId=${id}&date=${date}`);
}

const getExtraInforDoctorById = (id) => {
    return axios.get(`/api/get-extra-infor-doctor-by-id?doctorId=${id}`);
}

const getProfileDoctorById = (id) => {
    return axios.get(`/api/get-profile-doctor-by-id?doctorId=${id}`);
}

const postPatientBookAppointment = (data) => {
    return axios.post(`/api/patient-book-appointment`, data);
}

const postVerifyBookAppointment = (data) => {
    return axios.post(`/api/verify-book-appointment`, data);
}

const createNewSpecialty = (data) => {
    return axios.post(`/api/create-new-specialty`, data);
}

const getAllSpecialty = () => {
    return axios.get(`/api/get-specialty`);
}

const getAllDetailSpecialtyById = (data) => {
    return axios.get(`/api/get-detail-specialty-by-id?id=${data.id}&location=${data.location}`);
}

const createNewClinic = (data) => {
    return axios.post(`/api/create-new-clinic`, data);
}

const getAllClinic = () => {
    return axios.get(`/api/get-clinic`);
}

const getAllDetailClinicById = (data) => {
    return axios.get(`/api/get-detail-clinic-by-id?id=${data.id}`);
}

const getAllPatientForDoctor = (data) => {
    return axios.get(`/api/get-list-patient-for-doctor?doctorId=${data.doctorId}&date=${data.date}`);
}

const postSendRemedy = (data) => {
    return axios.post(`/api/send-remedy`, data);
}

export {
    handleLoginApi, getAllUserService, saveInforDoctorService,
    createNewUserService, editUserService, getAllDoctorService,
    deleteUserService, getAllCodeService, getTopDoctorHomeService,
    getInforDoctor, saveBulkScheduleDoctor, getScheduleDoctorByDate,
    getExtraInforDoctorById, getProfileDoctorById, postPatientBookAppointment,
    postVerifyBookAppointment, createNewSpecialty, getAllSpecialty,
    getAllDetailSpecialtyById, createNewClinic, getAllClinic, getAllDetailClinicById,
    getAllPatientForDoctor, postSendRemedy
}