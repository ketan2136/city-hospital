import React, { useEffect } from 'react';
import { object, string  } from 'yup';
import { Formik, useFormik } from 'formik';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { DialogTitle } from '@mui/material';

function DepartmentFrom({ onHandlesumit, update }) {

  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    if (update) {
      Formik.setValues(update)
      handleClickOpen();
    }

  }, [update])

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);

  };

  let d = new Date();
  let nd = new Date(d.setDate(d.getDate() - 1))
  let doctorschema = object({

    name: string().required('pealse enter name'),
    desc: string().required('pealse enter descrition'),

  })


  const Formik = useFormik({
    initialValues: {
      name: '',
      desc: ''


    },
    validationSchema: doctorschema,
    onSubmit: (values, action) => {

      action.resetForm()
      handleClose();
      onHandlesumit(values);

    },
  });
  const { values, handleBlur, handleSubmit, errors, touched, handleChange } = Formik
  return (
    <>
      <h1>Department</h1>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open form Department
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Department</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit}>
            <TextField

              margin="dense"
              id="name"
              name="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              label="Name"
              type="text"
              fullWidth
              variant="standard"
            />
            {
              errors.name && touched.name ?
                <span className='error' style={{ color: 'red' }}>{errors.name}</span> : null
            }

            <TextField

              margin="dense"
              id="name"
              name="desc"
              value={values.desc}
              onChange={handleChange}
              onBlur={handleBlur}
              rows={4}
              label="dec"
              type="address"
              fullWidth
              variant="standard"
            />
            {
              errors.desc && touched.desc ?
                <span className='error' style={{ color: 'red' }}>{errors.desc}</span> : null
            }


            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button type='submit' onClick={handleClose}>Sumbit</Button>
            </DialogActions>
          </form>
        </DialogContent>

      </Dialog>
    </>
  );
}

export default DepartmentFrom;
