import * as ActionTypes from '../ActionTypess'
import { Putdepartmentdata, deletedepartmentdata, getdepartmentdata, postdepartmentdata } from '../../../common/apis/department.api'

export const grt_departmentData = () => (Dispatch) => {
   try {
      Dispatch(loadingData(true))
      setTimeout(function () {
         getdepartmentdata()
            .then((response) => Dispatch({ type: ActionTypes.GET_DEPARTMENT, payload:response.data}))
            // .catch((error) => Dispatch(errorData(error.message)))

         // fetch("http://localhost:3004/department")
         // .then((response) => response.json())
         // .then((Data) =>Dispatch({type : ActionTypes.GET_DEPARTMENT, payload :Data}))
         // .catch((error) => Dispatch(errorData(error.message)))
      }, 3000)

   } catch (error) {
      console.log(error);
   }

}

export const Adddepartmentdata = (Data) => (Dispatch) => {
   // console.log(Data);
   try {
        postdepartmentdata(Data)
              .then((response) =>Dispatch({type : ActionTypes.ADD_DEPARTMENT, payload :response.data}))

      // fetch("http://localhost:3004/department", {
      //    method: 'POST',
      //    headers: {
      //       "Content-Type": "application/json",
      //    },

      //    body: JSON.stringify(Data)
      // })
      //    .then((response) => response.json())
      //    // .then((data) =>console.log(data))
      //    .then((Data) => Dispatch({ type: ActionTypes.ADD_DEPARTMENT, payload: Data }))
   } catch (error) {
      console.log(error);
   }
}



export const Deletedepartmentdata = (id) => (Dispatch) => {
   try {
       deletedepartmentdata(id)
        .then(Dispatch({type:ActionTypes.DELETE_DEPARTMENT ,payload:id}))
       .catch((error) => console.log(error))
      // fetch("http://localhost:3004/department/" + id, {
      //    method: 'DELETE',


      // })
      //    .then(Dispatch({ type: ActionTypes.DELETE_DEPARTMENT, payload: id }))
      //    .catch((error) => console.log(error))
   } catch (error) {
      console.log(error);
   }
}


export const Editdepartmentdata = (data) => (Dispatch) => {
   try {
        Putdepartmentdata   (data)
        .then(Dispatch({type:ActionTypes.UPDTE_DEPARTMENT ,payload:data}))
        .catch((error) => console.log(error))
      // fetch("http://localhost:3004/department/" + data.id, {
      //    method: 'PUT',
      //    headers: {
      //       "Content-Type": "application/json",
      //    },
      //    body: JSON.stringify(data)
      // })
      //    .then(Dispatch({ type: ActionTypes.UPDTE_DEPARTMENT, payload: data }))
      //    .catch((error) => console.log(error))
   } catch (error) {
      console.log(error);
   }

}

export const loadingData = (satus) => (Dispatch) => {
   Dispatch({ type: ActionTypes.LOADING_DEPARTMENT, payload: satus })
}

export const errorData = (errormsg) => (Dispatch) => {
   console.log(errormsg);
   Dispatch({ type: ActionTypes.ERROR_DEPARTMENT, payload: errormsg })
}