import * as ActionTypes from "../ActionType"

const inistate = {
    departments: [],
    loading: false,
    error: null
}

export const departmentReducher = (state = inistate, action) => {
    switch(action.type) {
        case ActionTypes.GET_DESC:
            return {
                ...state,
                departments: action.payload,
                loading: false,
            }
        case ActionTypes.ADD_DESC:
            return{
                ...state,
                departments: state.departments.concat(action.payload)
            }
    }
}