import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeToFevorite } from '../../redux/action/fevorite.action';

function FevoriteCart(props) {
    let dispatch = useDispatch();

    const mData = useSelector((state) => state.medicines);

    console.log(mData);

    const favData = useSelector((state) => state.fevorite);

    console.log( favData);

    let cartItems = favData.item.map((v) => {
        let medicine = mData.medicines.find((m) => m.id === v.pid);

        let fData = { ...medicine, ...v };

        return fData;
    })

    


    const handleRemove = (id) => {
        dispatch(removeToFevorite(id))
    }


    return (
        <section id="doctors" className="doctors">
            <div className="container">
                <div className="section-title">
                    <h2>Fevorite data</h2>
                </div>
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
                                                <h5 className="fw-normal mb-0"></h5>
                                            </div>
                                            <div style={{ width: 80 }}>
                                                <h5 className="mb-0"></h5>
                                            </div>
                                            <a href="#!" style={{ color: '#cecece' }} ><i className="fas fa-trash-alt"  onClick={() => handleRemove(c.id)}/></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    );
}

export default FevoriteCart;