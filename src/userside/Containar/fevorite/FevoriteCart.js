

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

function FevoriteCart(props) {
    let dispatch = useDispatch();

    const mData = useSelector((state) => state.medicines);

    const cData = useSelector((state) => state.cart);

   

    let cartItems = cData.item.map((v) => {
        let medicine = mData.medicines.find((m) => m.id === v.pid);

        let fData = { ...medicine, ...v };

        return fData;
    })

    console.log(cartItems);


    const handleRemove = (id) => {
       console.log(11111);
    }


    return (
        <section id="doctors" className="doctors">
            <div className="container">
                <div className="section-title">
                    <h2>Fevorite data</h2>
                </div>
                {/* {
                      cartItems.map((c, i) => {
                        return ( */}
                            <div className="card mb-3">
                                <div className="card-body">
                                    <div className="d-flex justify-content-between">
                                        <div className="d-flex flex-row align-items-center">
                                            <div className="ms-3">
                                                <h5></h5>
                                                <p className="small mb-0"></p>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-row align-items-center">
                                            <div style={{ width: 50 }}>
                                                <h5 className="fw-normal mb-0"></h5>
                                            </div>
                                            <div style={{ width: 80 }}>
                                                <h5 className="mb-0"></h5>
                                            </div>
                                            <a href="#!" style={{ color: '#cecece' }} ><i className="fas fa-trash-alt" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        {/* )
                    })
                }  */}
            </div>
        </section>
    );
}

export default FevoriteCart;