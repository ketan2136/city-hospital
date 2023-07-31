import { getRequest } from "../request"

export const getDoctoApi = () => {
   return getRequest('doctor');
}