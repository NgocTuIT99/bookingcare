import actionTypes from './actionTypes';
import {
    getAllCodeService, createNewUserService, getTopDoctorHomeService,
    getAllUserService, deleteUserService, editUserService, getAllDoctorService,
    saveInforDoctorService
} from '../../services/userService';
import { toast } from 'react-toastify';

export const fetchGenderStart = () => {
    return async (dispatch, getState) => {
        try {
            dispatch({ type: actionTypes.FETCH_GENDER_START });

            let res = await getAllCodeService("GENDER");
            if (res && res.errCode === 0) {
                dispatch(fetchGenderSuccess(res.data));
            } else {
                dispatch(fetchGenderFailed());
            }
        } catch (e) {
            dispatch(fetchGenderFailed());
            console.log(e);
        }
    }
}

export const fetchGenderSuccess = (genderData) => ({
    type: actionTypes.FETCH_GENDER_SUCCESS,
    data: genderData
})

export const fetchGenderFailed = () => ({
    type: actionTypes.FETCH_GENDER_FAILED
})

export const fetchPositionStart = () => {
    return async (dispatch, getState) => {
        try {
            dispatch({ type: actionTypes.FETCH_POSITION_START });

            let res = await getAllCodeService("POSITION");
            if (res && res.errCode === 0) {
                dispatch(fetchPositionSuccess(res.data));
            } else {
                dispatch(fetchPositionFailed());
            }
        } catch (e) {
            dispatch(fetchPositionFailed());
            console.log(e);
        }
    }
}

export const fetchPositionSuccess = (positionData) => ({
    type: actionTypes.FETCH_POSITION_SUCCESS,
    data: positionData
})

export const fetchPositionFailed = () => ({
    type: actionTypes.FETCH_POSITION_FAILED
})

export const fetchRoleStart = () => {
    return async (dispatch, getState) => {
        try {
            dispatch({ type: actionTypes.FETCH_ROLE_START });

            let res = await getAllCodeService("ROLE");
            if (res && res.errCode === 0) {
                dispatch(fetchRoleSuccess(res.data));
            } else {
                dispatch(fetchRoleFailed());
            }
        } catch (e) {
            dispatch(fetchRoleFailed());
            console.log(e);
        }
    }
}

export const fetchRoleSuccess = (roleData) => ({
    type: actionTypes.FETCH_ROLE_SUCCESS,
    data: roleData
})

export const fetchRoleFailed = () => ({
    type: actionTypes.FETCH_ROLE_FAILED
})

export const createNewUser = (data) => {
    return async (dispatch, getState) => {
        try {
            dispatch({ type: actionTypes.CREATE_USER_SUCCESS });

            let res = await createNewUserService(data);
            if (res && res.errCode === 0) {
                toast.success("Create a new user success!");
                dispatch(saveUserSuccess());
                dispatch(fetchAllUserStart());
            } else {
                toast.error("Create a new user error!");
                dispatch(saveUserFailed());
            }
        } catch (e) {
            toast.success("Create a new user error!");
            dispatch(saveUserFailed());
            console.log(e);
        }
    }
}

export const saveUserSuccess = () => ({
    type: actionTypes.CREATE_USER_SUCCESS
})

export const saveUserFailed = () => ({
    type: actionTypes.CREATE_USER_FAILED
})

export const fetchAllUserStart = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllUserService("ALL");
            if (res && res.errCode === 0) {
                dispatch(fetchAllUserSuccess(res.users));
            } else {
                dispatch(fetchAllUserFailed());
            }
        } catch (e) {
            dispatch(fetchAllUserFailed());
            console.log(e);
        }
    }
}

export const fetchAllUserSuccess = (data) => ({
    type: actionTypes.FETCH_ALL_USER_SUCCESS,
    users: data
})

export const fetchAllUserFailed = () => ({
    type: actionTypes.FETCH_ALL_USER_FAILED
})

export const deleteUser = (userId) => {
    return async (dispatch, getState) => {
        try {
            let res = await deleteUserService(userId);
            if (res && res.errCode === 0) {
                toast.success("Delete user success!");
                dispatch(deleteUserSuccess());
                dispatch(fetchAllUserStart());
            } else {
                toast.success("Delete user error!");
                dispatch(deleteUserFailed());
            }
        } catch (e) {
            toast.success("Delete user error!");
            dispatch(deleteUserFailed());
            console.log(e);
        }
    }
}

export const deleteUserSuccess = () => ({
    type: actionTypes.DELETE_USER_SUCCESS
})

export const deleteUserFailed = () => ({
    type: actionTypes.DELETE_USER_FAILED
})

export const editUser = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await editUserService(data);
            if (res && res.errCode === 0) {
                toast.success("Edit user success!");
                dispatch(editUserSuccess());
                dispatch(fetchAllUserStart());
            } else {
                toast.success("Edit user error!");
                dispatch(editUserFailed());
            }
        } catch (e) {
            toast.success("Edit user error!");
            dispatch(editUserFailed());
            console.log(e);
        }
    }
}

export const editUserSuccess = () => ({
    type: actionTypes.EDIT_USER_SUCCESS
})

export const editUserFailed = () => ({
    type: actionTypes.EDIT_USER_FAILED
})

export const fetchTopDoctor = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getTopDoctorHomeService(6);
            if (res && res.errCode === 0) {
                dispatch(fetchTopDoctorSuccess(res.data));
            } else {
                dispatch(fetchTopDoctorFailed());
            }
        } catch (e) {
            dispatch(fetchTopDoctorFailed());
            console.log(e);
        }
    }
}

export const fetchTopDoctorSuccess = (data) => ({
    type: actionTypes.FETCH_TOP_DOCTOR_SUCCESS,
    topDoctor: data
})

export const fetchTopDoctorFailed = () => ({
    type: actionTypes.FETCH_TOP_DOCTOR_FAILED
})

export const fetchAllDoctor = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllDoctorService();
            if (res && res.errCode === 0) {
                dispatch(fetchAllDoctorSuccess(res.data));
            } else {
                dispatch(fetchAllDoctorFailed());
            }
        } catch (e) {
            dispatch(fetchAllDoctorFailed());
            console.log(e);
        }
    }
}

export const fetchAllDoctorSuccess = (data) => ({
    type: actionTypes.FETCH_ALL_DOCTOR_SUCCESS,
    allDoctor: data
})

export const fetchAllDoctorFailed = () => ({
    type: actionTypes.FETCH_ALL_DOCTOR_FAILED
})

export const saveInforDoctor = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await saveInforDoctorService(data);
            if (res && res.errCode === 0) {
                toast.success("Save infor doctor success!");
                dispatch(saveInforDoctorSuccess());
            } else {
                toast.error("Save infor doctor failed!");
                dispatch(saveInforDoctorFailed());
            }
        } catch (e) {
            toast.error("Save infor doctor failed!");
            dispatch(saveInforDoctorFailed());
            console.log(e);
        }
    }
}

export const saveInforDoctorSuccess = () => ({
    type: actionTypes.SAVE_INFOR_DOCTOR_SUCCESS,
})

export const saveInforDoctorFailed = () => ({
    type: actionTypes.SAVE_INFOR_DOCTOR_FAILED
})

export const fetchAllScheduleTime = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllCodeService("TIME");
            if (res && res.errCode === 0) {
                dispatch(fetchAllScheduleTimeSuccess(res.data));
            } else {
                dispatch(fetchAllScheduleTimeFailed());
            }
        } catch (e) {
            dispatch(fetchAllScheduleTimeFailed());
            console.log(e);
        }
    }
}

export const fetchAllScheduleTimeSuccess = (data) => ({
    type: actionTypes.FETCH_ALLCODE_SCHEDULE_TIME_SUCCESS,
    dataTime: data
})

export const fetchAllScheduleTimeFailed = () => ({
    type: actionTypes.FETCH_ALLCODE_SCHEDULE_TIME_FAILED
})