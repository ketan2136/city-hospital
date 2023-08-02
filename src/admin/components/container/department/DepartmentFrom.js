import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useFormik } from 'formik';
import * as yup from 'yup'


export default function DepartmentFrom({ onhandlesubmit, onupdate }) {
    const [open, setOpen] = React.useState(false);

    React.useEffect(() => {
        if (onupdate) {
            formik.setValues(onupdate)
            handleClickOpen()
        }
    }, [onupdate])




    let d = new Date();
    let nd = new Date(d.setDate(d.getDate() - 1))

    let medicineschema = yup.object({
        name: yup.string().required(),
        desc: yup.string().required()
    });

    const formik = useFormik({
        validationSchema: medicineschema,

        initialValues: {
            name: '',
            desc: ''
        },
        onSubmit: (values, action) => {
            // handlesubmitdata(values)
            action.resetForm()
            handleClose()
            onhandlesubmit(values)
        },

    });

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = formik;


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                Open form dialog
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Subscribe</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To subscribe to this website, please enter your email address here. We
                        will send updates occasionally.
                    </DialogContentText>
                    <TextField
                        margin="dense"
                        id="name"
                        label="name"
                        name='name'
                        type="text"
                        fullWidth
                        variant="standard"
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    <span style={{ color: 'red' }}>{errors.name && touched.name ? errors.name : null}  </span>
                    <TextField
                        margin="dense"
                        id="name"
                        label="Description"
                        name='desc'
                        multiline
                        rows={4}
                        type="address"
                        fullWidth
                        variant="standard"
                        value={values.desc}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    <span style={{ color: 'red' }}>{errors.desc && touched.desc ? errors.desc : null} </span>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClose}>Subscribe</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}