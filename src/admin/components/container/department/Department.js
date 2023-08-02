import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import DepartmentFrom from './DepartmentFrom';
import { useDispatch, useSelector } from 'react-redux';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { addDepartments, getDepartment } from '../../../../userside/redux/action/department.action';



export default function Department() {

    const [update, setupdate] = React.useState(null);
    const dispatch = useDispatch()
    const departmentData = useSelector(state => state.departments)
  

    React.useEffect(() => {
        dispatch(getDepartment())
    }, [])

    const handleDelete = (id) => {
        console.log(id);
        // dispatch(deleteDoctorData(id))
    }

    const handleupdate = (data) => {
        setupdate(data)
    }

    const columns = [
        { field: 'name', headerName: 'Name', width: 130 },
        { field: 'desc', headerName: 'description ', width: 130 },
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

    // const handlesubmit = (data) => {
    //     dispatch(addDepartments(data))
    //     // if (update) {
    //     //     // dispatch(updateDoctorData(data))
    //     // } else {
    //     //     // dispatch(addDoctorData(data))
    //     // }
    //     setupdate(null)
    // }


    return (
        <>

      
            <DepartmentFrom  onupdate={update} />
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={departmentData.departments}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: {
                                pageSize: 5,
                            },
                        },
                    }}
                    pageSizeOptions={[5]}
                    checkboxSelection
                    disableRowSelectionOnClick
                />
            </div>
        </>
    );
}

