import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Medicinefrom from './Medicinefrom';
import EditIcon from '@mui/icons-material/Edit';


export default function Medicine() {

  const [Data, setData] = React.useState([]);
  const [update, setupdate] = React.useState(null);


  //6
  React.useEffect(() => {
    let localData = JSON.parse(localStorage.getItem("medicine"));

    if (localData !== null) {
      setData(localData)
    }
  }, []);

  //3
  const handlesubmitdata = (data) => {


    let localdata = JSON.parse(localStorage.getItem('medicine'));

    let rno = Math.floor(Math.random() * 1000);

    var NewData = { id: rno, ...data };

    if (localdata === null) {
      localStorage.setItem('medicine', JSON.stringify([NewData]));
      setData([NewData]) //4
    } else {
      if (update) {
        let udata = localdata.map((v) => {
          if (v.id === data.id) {
            return data;
          } else {
            return v;
          }

        })
        localStorage.setItem('medicine', JSON.stringify(udata));
        setData(udata)
      } else {
        localdata.push(NewData);
        localStorage.setItem('medicine', JSON.stringify(localdata));
        setData(localdata)//5
      }

    }


  }

  const handleupdate = (v) => {

    setupdate(v)
   

  }



  const handledelet = (id) => {
    let localdata = JSON.parse(localStorage.getItem('medicine'));

    let fdata = localdata.filter((v, i) => v.id !== id);

    localStorage.setItem('medicine', JSON.stringify(fdata));
    setData(fdata)

  }

  const columns = [
    // { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Medicine', width: 130 },
    { field: 'price', headerName: 'Price', width: 130 },
    { field: 'date', headerName: 'Expiry Date', width: 130 },
    { field: 'desc', headerName: 'Description', sortable: false, width: 400, },
    {
      field: 'action',
      headerName: 'Action',
      width: 200,
      renderCell: (params) => (
        <>
          <IconButton aria-label="delete" onClick={() => handledelet(params.row.id)}>
            <DeleteIcon />
          </IconButton>
          <IconButton aria-label="edit" onClick={() => handleupdate(params.row)}>
        <EditIcon />
      </IconButton>
        </>
      )
    },
  ];

  //2 //7
  return (
    <>
      <Medicinefrom onhandlesubmit={handlesubmitdata} onupdate={update}/>
      <div style={{ height: 470, width: '100%' }}>
        <DataGrid
          rows={Data}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 7 },
            },
          }}
          pageSizeOptions={[7, 14]}
          checkboxSelection
        />
      </div>
    </>
  );
}
