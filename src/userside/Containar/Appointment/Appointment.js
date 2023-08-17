import { useFormik } from 'formik';
import React from 'react';
import * as yup from 'yup'
import { AptdataAdd } from '../../redux/slice/appointmentSlice';
import { useDispatch } from 'react-redux';

function Appointment(props) {
    let d = new Date();
    let nd = new Date(d.setDate(d.getDate() - 1));

    const dispatch = useDispatch();

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

        },

        validationSchema: userSchema,
        onSubmit: values => {
            dispatch(AptdataAdd(values))
            console.log(values);
        },
    })

    const { handleBlur, handleChange, handleSubmit, values, errors, touched } = formik


    return (
        <section id="appointment" className="appointment">
            <div className="container">
                <div className="section-title">
                    <h2>Make an Appointment</h2>
                    <p>Aenean enim orci, suscipit vitae sodales ac, semper in ex. Nunc aliquam eget nibh eu euismod. Donec dapibus
                        blandit quam volutpat sollicitudin. Fusce tincidunt sit amet ex in volutpat. Donec lacinia finibus tortor.
                        Curabitur luctus eleifend odio. Phasellus placerat mi et suscipit pulvinar.</p>
                </div>
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
            </div>
        </section>

    );
}

export default Appointment;