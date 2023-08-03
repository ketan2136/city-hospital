import * as ActionTypes from '../ActionTypes'

const initstate = {
  department: [],
  loading: false,
  error: null

}

export const departmentReducer = (state = initstate, action) => {
  console.log(action);

  switch (action.type) {
    case ActionTypes.LOADING_DEPARTMENT:
      return {
        department: [],
        loading: action.payload,
        error: null
      }

      case ActionTypes.ERROR_DEPARTMENT:
        return{
            department: [],
        loading: false,
        error: action.payload
        }

    case ActionTypes.GET_DEPARTMENT:
      return {
        ...state,
        department: action.payload,
        loading: false
      }

    case ActionTypes.ADD_DEPARTMENT:
      return {
        ...state,
        department: state.department.concat(action.payload)
      }

    case ActionTypes.DELETE_DEPARTMENT:
      return {
        ...state,
        department: state.department.filter((v) => v.id !== action.payload)
      }
    case ActionTypes.UPDTE_DEPARTMENT:
      return {
        ...state,
        department: state.department.map((v) => {
          if (v.id === action.payload.id) {
            return action.payload;
          } else {
            return v;
          }
        })
      }
    default:
      return state
  }
}