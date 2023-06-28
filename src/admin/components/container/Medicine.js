import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
// import React, { useState } from 'react';
import { Form, Formik, useFormik } from 'formik';
import { object, string, number, date, InferType } from 'yup';
import * as yup from 'yup';


export default function Medicine() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  let userSchema = object({
    medicine: yup.string().required('please enter name'),
    date: yup.string().required('plase enetr date'),
    number: yup.string().required('please enter nymber '),
    message: yup.string().required('please enter me'),
  });


  const formik = useFormik({
    initialValues: {
      medicine: '',
      date: '',
      number: '',
      message: '',
    },
    validationSchema: userSchema,
    onSubmit: values => {
      // alert(JSON.stringify(values, null, 2));
    },
  });

  const { handleChange, handleBlur, handleSubmit, values, errors, touched } = formik

  console.log(errors);

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Medicine</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText>
          <Formik values={formik}>
            <Form onSubmit={handleSubmit}>
              <TextField
                margin="dense"
                id="medicine"
                label="medicine name"
                type="text"
                name='medicine'
                fullWidth
                variant="filled"
                onChange={handleChange}
                value={values.medicine}
                onBlur={handleBlur}
              />

              <span className='errors'>{errors.medicine && touched.medicine ? errors.medicine : ''}</span>

              <TextField
                autoFocus
                margin="dense"
                id="date"
                name='date'
                // label="Email Address"
                type="date"
                fullWidth
                variant="filled"
                onChange={handleChange}
                value={values.date}
                onBlur={handleBlur}
              />
              <span className='errors'>{errors.date && touched.date ? errors.date : ''}</span>

              <TextField
                autoFocus
                margin="dense"
                id="number"
                name='number'
                label="medicine price"
                type="text"
                fullWidth
                variant="filled"
              onChange={handleChange}
              value={values.number}
              onBlur={handleBlur}
              />
              <span className='errors'>{errors.number && touched.number ? errors.number : ''}</span>

              <TextField
                name="message"
                margin="dense"
                id="message"
                label=" Message"
                type="text"
                fullWidth
                variant="filled"
              onChange={handleChange}
              value={values.message}
              onBlur={handleBlur}
              />
              <span className='errors'>{errors.message && touched.message ? errors.message : ''}</span>
            </Form>
          </Formik>

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}