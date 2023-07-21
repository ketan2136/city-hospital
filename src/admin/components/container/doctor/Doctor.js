import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addDoctorData, deleteDoctorData, getDoctorData, updateDoctorData } from '../../../../userside/redux/action/doctor.action'
import { DataGrid } from '@mui/x-data-grid';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Doctordrower from './Doctordrower';
import CircularProgress from '@mui/material/CircularProgress';

function Doctor(props) {
    const [update, setupdate] = React.useState(null);

    const dispatch = useDispatch()
    const doctorData = useSelector(state => state.doctors)
    // console.log(doctorData)

    useEffect(() => {
        dispatch(getDoctorData())
    }, [])

    const handleDelete = (id) => {
        console.log(id);
        dispatch(deleteDoctorData(id))
    }

    const handleupdate = (data) => {
        setupdate(data)
    }

    const columns = [
        { field: 'name', headerName: 'Name', width: 130 },
        { field: 'price', headerName: 'Price', width: 130 },
        {
            field: 'action',
            headerName: 'Action',
            width: 130,
            renderCell: (params) => (
                <>
                    <IconButton aria-label="delete" onClick={() => handleDelete(params.row.id)}>
                        <DeleteIcon />
                    </IconButton>

                    <IconButton aria-label="edit" onClick={() => handleupdate(params.row)}>
                        <EditIcon />
                    </IconButton>
                </>
            ),

        }
    ]

    const handlesubmit = (data) => {
        if (update) {
            dispatch(updateDoctorData(data))
        } else {
            dispatch(addDoctorData(data))
        }
        setupdate(null)
    }

    return (

        <div>

        {
            doctorData.loading ? <CircularProgress color="secondary" /> : 
                 <>
                 <div>
        
                    <Doctordrower onhandlesubmit={handlesubmit} onupdate={update} />
        
                    <div style={{ height: 400, width: '100%' }}>
                        <DataGrid
                            rows={doctorData.doctors}
                            columns={columns}
                            pageSizeOptions={[5, 10]}
                            checkboxSelection
                        />
                    </div>
                </div>
                </>
        }
        </div>
// {   
//     doctorData.loading ? <CircularProgress color="secondary" /> : 

//     <>
//     <div>

//             <Doctordrower onhandlesubmit={handlesubmit} onupdate={update} />

//             <div style={{ height: 400, width: '100%' }}>
//                 <DataGrid
//                     rows={doctorData.doctors}
//                     columns={columns}
//                     pageSizeOptions={[5, 10]}
//                     checkboxSelection
//                 />
//             </div>
//         </div>
//         </>
// }

        
    );
}

export default Doctor;






// function Doctor(props) {

//     const dispatch = useDispatch()
   
//     const doctorData = useSelector(state => state.doctors)
    
//     console.log(doctorData)

//     useEffect(() => {
//         dispatch(getDoctorData())
//     }, [])

//     // "id": 102,
//     // "name": "ABC",
//     // "price": 500

// const columns = [
//     { field: 'id', headerName: 'Id', width: 130 },
//     { field: 'name', headerName: 'Name', width: 130 },
//     { field: 'price', headerName: 'Price', width: 130 },
// ]

// return (
//     <div>
//         <p>{doctorData.doctors}</p>
//         <h1>Hello Doctors Page</h1>

//         <div style={{ height: 400, width: '100%' }}>
//             <DataGrid
//                 rows={doctorData.doctors}
//                 columns={columns}
//                 pageSizeOptions={[5, 10]}
//                 checkboxSelection
//             />
//         </div>
//     </div>
// );

// }

// export default Doctor;