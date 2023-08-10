import React from 'react';
import Header from "../userside/Components/Header";
import Footer from "../userside/Components/Footer";
import { Route, Routes, Link } from 'react-router-dom';
import About from "../userside/Containar/about/About";
import Appointment from "../userside/Containar/Appointment/Appointment";
import Contact from "../userside/Containar/Contact/Contact";
import Departments from "../userside/Containar/Departments/Departments";
import Doctors from "../userside/Containar/Doctors/Doctors";
import Doctor from "../userside/Containar/Doctor/Doctor";
import Home from "../userside/Containar/Home";
import VisitingDoctor from "../userside/Containar/visitingdoctor/VisitingDoctor.js";
import Notfound from "../userside/Containar/Notfound";
import Auth from "../userside/Containar/Auth";
import Auth1 from "../userside/Containar/Auth1";
import Exam from "../userside/Containar/Exam";
import Mediciandata from '../userside/Containar/Medician/Mediciandata';
import PrivateRoute from './PrivateRoute';
import Counter from '../userside/Containar/counter/Counter';
import { Provider } from 'react-redux';
import Cart from '../userside/Containar/cart/Cart';
import FevoriteCart from '../userside/Containar/fevorite/FevoriteCart';
import Cart1 from '../userside/Containar/Cart1/Cart1';

import NewMedicine from '../userside/Containar/new_medicine/NewMedicine';



function User(props) {
    return (
        <>
                <Header />



                {/* <Exam /> */}
                <Routes>
                    <Route path='/counter' element={<Counter />} />
                    <Route exact path='/' element={<Home />} />
                    {/* <PrivateRouter path='/about' element={<About />} /> */}

                    <Route path='/about' element={<About />} />
                    <Route path='/Appointment' element={<Appointment />} />

                    <Route path='/Contact' element={<Contact />} />
                    <Route path='/Departments' element={<Departments />} />
                    <Route path='/Doctors' element={<Doctors />} />
                    <Route path='/Doctor/:id' element={<Doctor />} />
                    <Route path='/Doctor/Visiting_Doctor' element={<VisitingDoctor />} />

                    <Route path='/Doctor/'>
                        <Route path=':id' element={<Doctor />} />
                        <Route path='Visiting_Doctor' element={<VisitingDoctor />} />
                    </Route>

                    <Route path='*' element={<Notfound />}></Route>


                    <Route path='/auth1' element={<Auth1 />}></Route>


                    <Route element={<PrivateRoute />}>
                        <Route path='/mediciandisplay' element={<Mediciandata />} />
                    </Route>

                    <Route path='/cart' element={<Cart />} />
                    <Route path='/cart1' element={<Cart1 />} />
                    
                    <Route path='/newmedicine' element={<NewMedicine />}/>

                    <Route path='/fevorite' element={<FevoriteCart />} />
                    {/* <PrivateRouter path='/mediciandisplay' element={<Mediciandata />} /> */}


                    {/* <Route path='/auth' element={<Auth />}></Route>  */}



                </Routes>
                <Footer />
        </>
    );
}

export default User;

