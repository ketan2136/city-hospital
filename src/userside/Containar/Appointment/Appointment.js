import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import * as yup from 'yup'
import { AptdataAdd, AptdataDelete, AptdataGet, AptdataUpdate } from '../../redux/slice/appointmentSlice';
import { useDispatch, useSelector } from 'react-redux';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import StyleIcon from '@mui/icons-material/Style';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from 'reactstrap';
import { IconButton } from '@mui/material';

function Appointment(props) {

    const [value, setValue] = React.useState(0);
    const [update, setupdate] = useState(false);

    const dispatch = useDispatch();
    const apt = useSelector(state => state.apt);


    console.log(apt);

    useEffect(() => {
        dispatch(AptdataGet())
    }, [])

    const handleChangeTab = (event, newValue) => {
        setValue(newValue);
        console.log(value);
    };

    let d = new Date();
    let nd = new Date(d.setDate(d.getDate() - 1));


    let userSchema = yup.object().shape({
        name: yup.string().required("Please enter Name"),
        email: yup.string().email('Invalid email').required("Please enter Email"),
        department: yup.string().required("Please enter your department"),
        PhoneNumber: yup.number().required("please enter your number").test('PhoneNumber', 'Must be exactly 10 number.', (value) => { if (value) { return value.toString().length === 10 } }),
        Address: yup.string().required('Please enter your massage').test('Address', 'maxmium 5 word allowed.', function (val) {
            let arr = val.split(" ");

            if (arr.length > 5) {
                return false
            } else {
                return true
            }
        }),

        file: yup.mixed().required("please upload file"),
        expiry: yup.date().min(nd, "please entre a valid date").required(),
        Accept: yup.bool().oneOf([true], 'Accept Terms is required')
    })

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            PhoneNumber: '',
            department: '',
            Address: '',
            expiry: '',
            file: ''
        },

        validationSchema: userSchema,
        onSubmit: (values, action) => {

            console.log(values);


            if (update) {
                dispatch(AptdataUpdate(values))
            } else {
                dispatch(AptdataAdd(values))
            }
            // setValues(1)
            // setupdate(false)
            action.resetForm()

        },
    })

    const handleUpdate = (v) => {
        // dispatch(AptdataUpdate(data))
        console.log(v, '555555555');
        setupdate(true)
        setValue(0)
        setValues(v)

    }

    const handleRemove = (v) => {
        dispatch(AptdataDelete(v))
    }

    const { handleBlur, handleChange, handleSubmit, values, errors, touched, setValues, setFieldValue } = formik

    return (
        <section id="appointment" className="appointment">
            <div className="container">
                <div className="section-title">
                    <h2>Make an Appointment</h2>
                    <p>Aenean enim orci, suscipit vitae sodales ac, semper in ex. Nunc aliquam eget nibh eu euismod. Donec dapibus
                        blandit quam volutpat sollicitudin. Fusce tincidunt sit amet ex in volutpat. Donec lacinia finibus tortor.
                        Curabitur luctus eleifend odio. Phasellus placerat mi et suscipit pulvinar.</p>
                </div>


                <Tabs value={value} onChange={handleChangeTab} aria-label="icon label tabs example">
                    <Tab className='appicon' icon={<StyleIcon />} label="Book Appointment" />
                    <Tab className='appicon' icon={<FormatListBulletedIcon />} label="List Appointment" />
                </Tabs>

                {
                    value === 0 &&
                    <form onSubmit={handleSubmit} action method="post" role="form" className="php-email-form">
                        <div className="row">
                            <div className="col-md-4 form-group">
                                <input
                                    type="text"
                                    name="name"
                                    className="form-control"
                                    id="name"
                                    placeholder="Your Name"
                                    data-rule="minlen:4"
                                    data-msg="Please enter at least 4 chars"
                                    value={values.name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <span className='error'>{errors.name && touched.name ? errors.name : ''}</span>
                                <div className="validate" />
                            </div>
                            <div className="col-md-4 form-group mt-3 mt-md-0">
                                <input type="email"
                                    className="form-control"
                                    name="email"
                                    id="email"
                                    placeholder="Your Email"
                                    data-rule="email"
                                    data-msg="Please enter a valid email"
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <span className='error'>{errors.email && touched.email ? errors.email : ''}</span>

                                <div className="validate" />
                            </div>
                            <div className="col-md-4 form-group mt-3 mt-md-0">
                                <input type="tel"
                                    className="form-control"
                                    name="PhoneNumber" id="PhoneNumber"
                                    placeholder="Your Phone"
                                    data-rule="minlen:4"
                                    data-msg="Please enter at least 4 chars"
                                    value={values.PhoneNumber}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                />
                                <span className='error'>{errors.PhoneNumber && touched.PhoneNumber ? errors.PhoneNumber : ''}</span>

                                <div className="validate" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4 form-group mt-3">
                                <input type="date"
                                    name="expiry"
                                    className="form-control datepicker"
                                    id="expiry"
                                    placeholder="Appointment Date"
                                    data-rule="minlen:4"
                                    data-msg="Please enter at least 4 chars"
                                    value={values.expiry}
                                    onChange={handleChange}
                                    onBlur={handleBlur}

                                />
                                <span className='error'>{errors.expiry && touched.expiry ? errors.expiry : ''}</span>
                                <div className="validate" />
                            </div>
                            <div className="col-md-4 form-group mt-3">
                                <select
                                    name="department"
                                    id="department"
                                    className="form-select"
                                    value={values.department}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                >
                                    <option value>Select Department</option>
                                    <option value="Department 1">Department 1</option>
                                    <option value="Department 2">Department 2</option>
                                    <option value="Department 3">Department 3</option>
                                </select>
                                <span className='error'>{errors.department && touched.department ? errors.department : ''}</span>
                                <div className="validate" />
                            </div>
                        </div>
                        <div className="form-group mt-3">
                            <input
                                type="file"
                                name=""
                                onChange={(event) => setFieldValue("file", event.target.files[0])}

                            />

                            

                            <img width={'150px'} height={'150px'} src={typeof values.file === "string" ? values.file : URL.createObjectURL(values.file)} />

                            <span className='error'>{errors.file && touched.file ? errors.file : ''}</span>
                        </div>
                        <div className="form-group mt-3">
                            <textarea
                                className="form-control"
                                name="Address" rows={5}
                                placeholder="Message (Optional)"
                                defaultValue={""}
                                value={values.Address}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            <span className='error'>{errors.Address && touched.Address ? errors.Address : ''}</span>
                            <div className="validate" />
                        </div>
                        <div className="mb-3">

                            <div className="loading">Loading</div>
                            <div className="error-message" />
                            <div className="sent-message">Your appointment request has been sent successfully. Thank you!</div>

                        </div>
                        <div className="text-center"><button type="submit" >Make an Appointment</button></div>
                    </form>
                }

                {
                    value === 1 &&
                    <>
                        <h1>Hello Appoinment</h1>
                        <div className='row'>
                            {
                                apt.apt.map((v, i) => {
                                    return (

                                        <div className="card mb-3">
                                            <div className="card-body">
                                                <div className="d-flex justify-content-between">
                                                    <div className="d-flex flex-row align-items-center">
                                                        <div className="ms-3">
                                                            <h5>{v.name}</h5>
                                                            <p className="small mb-0">{ }</p>
                                                            <img width={'150px'} height={'150px'} src={v.file}></img>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex flex-row align-items-center">

                                                        <IconButton aria-label="delete" onClick={() => handleRemove(v)}>
                                                            <DeleteIcon />
                                                        </IconButton>

                                                        <IconButton aria-label="edit" onClick={() => handleUpdate(v)}>
                                                            <EditIcon />
                                                        </IconButton>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </>
                }

            </div>
        </section>

    );
}

export default Appointment;