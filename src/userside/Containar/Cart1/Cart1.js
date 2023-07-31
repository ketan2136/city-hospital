import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';

function Cart(props) {
    const [medicineData, setmedicineData] = useState([]);
    const [localdata, setlocaldata] = useState([]);

    useEffect(() => {

        let localdata = JSON.parse(localStorage.getItem("cart_data"));
        setlocaldata(localdata);

        fetch("http://localhost:3004/medicines")
            .then((response) => response.json())
            .then((data) => setmedicineData(data))
            .catch((error) => console.log(error))

    }, [])


    // let dispatch = useDispatch()
    // const medData = useSelector((state) => state.medicines);
    // const cartData = useSelector((state) => state.cart);
    // console.log(cartData);

    // let localdata = JSON.parse(localStorage.getItem("cart_data"));

    let cartItems = localdata.map((v) => {
        let medicine = medicineData.find((m) => m.id === v.pid);

        let fData = { ...medicine, ...v };

        return fData;
    })

    const handleInc = (id) => {
        let data = localdata.map((v) => {
            if (v.pid === id) {
                return { ...v, qty: v.qty + 1 }
            } else {
                return v;
            }
        });
        setlocaldata(data);
        localStorage.setItem("cart_data", JSON.stringify(data));

    }
    const handleDnc = (id) => {
        // console.log(id);

        let data = localdata.map((v) => {
            if (v.pid === id && v.qty > 1) {
                return { ...v, qty: v.qty - 1 }
            } else {
                return v;
            }
        });
        setlocaldata(data);
        localStorage.setItem("cart_data", JSON.stringify(data));
    }


    const handleRemove = (id) => {
        console.log(id);

        let dData = localdata.filter((v) => v.pid !== id);

        setlocaldata(dData);
        localStorage.setItem("cart_data", JSON.stringify(dData));
    }

    return (
        <>
            <section id="doctors" className="doctors">
                <div className="container">
                    <div className="section-title">
                        <h2>new cart data</h2>
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
                                                        <p className="small mb-0">{c.desc.substring(0,50)}</p>
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-row align-items-center">
                                                    <div style={{ width: 50 }}>
                                                        <Button onClick={() => handleInc(c.pid)}>+</Button>
                                                        <h5 className="fw-normal mb-0">{c.qty}</h5>
                                                        <Button onClick={() => handleDnc(c.pid)}>-</Button>
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
                    <div class="d-flex justify-content-between">
                        <p class="mb-2">Subtotal</p>
                        <p class="mb-2">$4798.00</p>
                    </div>

                </div>
            </section>
        </>
    );
}

export default Cart;

