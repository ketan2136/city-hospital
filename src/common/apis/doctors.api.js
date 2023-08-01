import { deleteRequest, getRequest, postRequest, putRequest } from "../request"

export const getDoctoApi = () => {
   return getRequest('doctor');
}

export const addDoctorApi = (data) => {
    return postRequest('doctor', data);
}


export const deleteDoctorApi = (id) => {
    return deleteRequest('doctor/' + id);
}


export const putDoctorApi = (data) => {
    return putRequest('doctor/' + data.id , data);
}