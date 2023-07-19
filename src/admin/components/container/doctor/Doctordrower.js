// import * as React from 'react';
// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';
// import { useDispatch } from 'react-redux';
// import { DataGrid } from '@mui/x-data-grid';

// export default function Doctordrower() {
//     const [open, setOpen] = React.useState(false);

//     const dispatch = useDispatch();

//     React.useEffect(() => {
//         // dispatch();
//     }, []);

//     let appointmentSchema = Yup.object({
//         name: Yup.string().required('Enter your name'),
//         email: Yup.string().email('Please enter valid email').required('Please enter email'),
//         specialist: Yup.string().required('Please enter specialist'),
//         number: Yup.number().max(10, 'enter max 10').required('please enter mobile number'),
//     });

//     const formik = useFormik({
//         validationSchema: appointmentSchema,
//         initialValues: {
//             name: '',
//             email: '',
//             specialist: '',
//             number: '',
//         },
//         onSubmit: values => {
//             alert(JSON.stringify(values, null, 2));
//         },
//     });

//     const { values, errors, touched, handleBlur, handleChange, handleSubmit } = formik;

//     const handleClickOpen = () => {
//         setOpen(true);
//     };

//     const handleClose = () => {
//         setOpen(false);
//     };

//     const columns = [
//         { field: 'name', headerName: 'Doctor', width: 130 },
//         { field: 'designation', headerName: 'Designation', width: 130 },
//         { field: 'discription', headerName: 'Discription', width: 130 },
//     ];

//     return (
//         <>
//             <div>
//                 <Button variant="outlined" onClick={handleClickOpen}>
//                     Add Doctor's
//                 </Button>
//                 <Dialog open={open} onClose={handleClose}>
//                     <DialogTitle>Add Doctor's</DialogTitle>
//                     <form onSubmit={handleSubmit}>
//                         <DialogContent>
//                             <DialogContentText>
//                                 To subscribe to this website, please enter your email address here. We
//                                 will send updates occasionally.
//                             </DialogContentText>
//                             <TextField
//                                 margin="dense"
//                                 id="name"
//                                 name='name'
//                                 label="Doctor Name"
//                                 type="text"
//                                 fullWidth
//                                 variant="standard"
//                                 value={values.name}
//                                 onChange={handleChange}
//                                 onBlur={handleBlur}
//                                 helperText={errors.name && touched.name ? errors.name : ''}
//                                 error={errors.name && touched.name ? errors.name : ''}
//                             />
//                             <TextField
//                                 margin="dense"
//                                 id="email"
//                                 name='email'
//                                 label="Email Address"
//                                 type="email"
//                                 fullWidth
//                                 variant="standard"
//                                 value={values.email}
//                                 onChange={handleChange}
//                                 onBlur={handleBlur}
//                                 helperText={errors.email && touched.email ? errors.email : ''}
//                                 error={errors.email && touched.email ? errors.email : ''}
//                             />
//                             <TextField
//                                 margin="dense"
//                                 id="specialist"
//                                 name='specialist'
//                                 label="Specialist"
//                                 type="text"
//                                 fullWidth
//                                 variant="standard"
//                                 value={values.specialist}
//                                 onChange={handleChange}
//                                 onBlur={handleBlur}
//                                 helperText={errors.specialist && touched.specialist ? errors.specialist : ''}
//                                 error={errors.specialist && touched.specialist ? errors.specialist : ''}
//                             />
//                             <TextField
//                                 margin="dense"
//                                 id="number"
//                                 name='number'
//                                 label="Mobile Number"
//                                 type="text"
//                                 fullWidth
//                                 variant="standard"
//                                 value={values.number}
//                                 onChange={handleChange}
//                                 onBlur={handleBlur}
//                                 helperText={errors.number && touched.number ? errors.number : ''}
//                                 error={errors.number && touched.number ? errors.number : ''}
//                             />
//                         </DialogContent>
//                         <DialogActions>
//                             <Button onClick={handleClose}>Cancel</Button>
//                             <Button type='submit'>Add</Button>
//                         </DialogActions>
//                     </form>
//                 </Dialog>
//             </div>
//             <div style={{ height: 470, width: '100%' }}>
//                 <DataGrid
//                     // rows={locData}
//                     columns={columns}
//                     initialState={{
//                         pagination: {
//                             paginationModel: { page: 0, pageSize: 7 },
//                         },
//                     }}
//                     pageSizeOptions={[50, 100]}
//                     checkboxSelection
//                 />
//             </div>
//         </>
//     );
// }

import React from 'react';

function Doctordrower(props) {
    return (
        <div>
            
        </div>
    );
}

export default Doctordrower;