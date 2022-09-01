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

export {
    handleLoginApi, getAllUserService, saveInforDoctorService,
    createNewUserService, editUserService, getAllDoctorService,
    deleteUserService, getAllCodeService, getTopDoctorHomeService,
    getInforDoctor, saveBulkScheduleDoctor, getScheduleDoctorByDate
}