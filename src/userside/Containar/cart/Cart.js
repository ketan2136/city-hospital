import { Button } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
//import { decrementCart, incrementCart, removeCart } from '../../redux/action/card.action';
import {removeCart, increment, decrement } from '../../redux/slice/CartSlice';


function Cart(props) {
    let dispatch = useDispatch()

    const medData = useSelector((state) => state.medicines);

    const cartData = useSelector((state) => state.cart);

    console.log(cartData);

    let cartItems = cartData.item.map((v) => {
        let medicine = medData.medicines.find((m) => m.id === v.pid);

        let fData = { ...medicine, ...v };

        return fData;
    })

    console.log(cartItems);

    const handleInc = (id) => {
        dispatch(increment(id))
    }
    const handleDnc = (id) => {
        dispatch(decrement(id))
    }

    const handleRemove = (id) => {
        dispatch(removeCart(id))
    }

    return (
        <>
            <section id="doctors" className="doctors">
                <div className="container">
                    <div className="section-title">
                        <h2>cart data</h2>
                    </div>
                    <div className="container">
                        {
                            cartItems.map((c, i) => {
                                return (
                                    <div className="card mb-3">
                                        <div className="card-body">
                                            <div className="d-flex justify-content-between">
                                                <div className="d-flex flex-row align-items-center">
                                                    <div className="ms-3">
                                                        <h5>{c.name}</h5>
                                                        <p className="small mb-0">{c.desc}</p>
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-row align-items-center">
                                                    <div style={{ width: 50 }}>
                                                        <Button onClick={()=> handleInc(c.pid)}>+</Button>
                                                        <h5 className="fw-normal mb-0">{c.qty}</h5>
                                                        <Button onClick={()=> handleDnc(c.pid)}>-</Button>
                                                    </div>
                                                    <div style={{ width: 80 }}>
                                                        <h5 className="mb-0">{c.qty * c.price}</h5>
                                                    </div>
                                                    <a href="#!" style={{ color: '#cecece' }} onClick={() => handleRemove(c.pid)}><i className="fas fa-trash-alt" /></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }


                    </div>

                </div>
            </section>
        </>
    );
}

export default Cart;