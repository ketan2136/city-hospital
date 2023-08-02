import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useEffect } from 'react';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useDispatch, useSelector } from 'react-redux';
import { addMedicineData, deleteMedicineData, getMedicineData, updateMedicineData } from '../../../../userside/redux/action/medicine.action';
import Medicinefrom from './Medicinefrom';


function Medicine(props) {
  const [items, setItems] = React.useState([]);
  const [update, setupdate] = React.useState(null);

  const dispatch = useDispatch();
  const medicineData = useSelector(state => state.medicines)


  useEffect(() => {
    dispatch(getMedicineData())
  }, [])


  const handlesubmitdata = (data) => {
    if (update) {
      dispatch(updateMedicineData(data))
    } else {
      dispatch(addMedicineData(data))
    }
    setupdate(null)
  }

  const handleDelete = (id) => {
    dispatch(deleteMedicineData(id))
  }

  const handleupdate = (data) => {
    setupdate(data)
  }


  const columns = [

    // { field: 'id', headerName: 'ID', width: 130 },
    { field: 'name', headerName: 'Name', width: 130 },
    { field: 'expiry', headerName: 'ExpiryDate', width: 130 },
    { field: 'price', headerName: 'Price', width: 130 },
    { field: 'desc', headerName: 'Description', width: 130 },
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

  ];


  return (

    <>
      <Medicinefrom onhandlesubmit={handlesubmitdata} onupdate={update} />

      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={medicineData.medicines}
          columns={columns}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />
      </div>
    </>
  );
}

export default Medicine;