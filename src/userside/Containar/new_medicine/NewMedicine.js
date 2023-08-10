import React, { useEffect, useState } from 'react';
import Cardcostom from '../../Components/UL/Cardcostom';
import { SnackbarProvider, enqueueSnackbar } from 'notistack';
import { Snackbar } from '@mui/material';

function NewMedicine(props) {
    const [data, setdata] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3004/medicines")
            .then((response) => response.json())
            .then((data) => setdata(data))
            .catch((error) => console.log(error))

    }, [])

    const handlecart = (id) => {
        console.log(id);
        let localdata = JSON.parse(localStorage.getItem('cart_data'));

        if (localdata === null) {
            localStorage.setItem('cart_data', JSON.stringify([{
                pid: id,
                qty: 1
            }]));
        } else {
            let mdata = localdata.find((m) => m.pid == id);

            if (mdata) {
                mdata.qty++;
                localStorage.setItem('cart_data', JSON.stringify(localdata));
            } else {
                localdata.push({
                    pid: id,
                    qty: 1
                });
                localStorage.setItem('cart_data', JSON.stringify(localdata));
            }
        }
    }


    return (
        <section id="doctors" className="doctors">
            <div className="container">
                <div className="section-title">
                    <h2>new cart data</h2>
                </div>

                <div>
                    <SnackbarProvider />
                    <button onClick={() => enqueueSnackbar('That was easy!')}>Show snackbar</button>
                    <Snackbar message="copy message"/>
                </div>

                <div className="container">
                    {

                        data.map((v, i) => {
                            return (
                                <div className='col-md-3'>
                                    <Cardcostom
                                        value={v}
                                        onclick1={handlecart}
                                        btnval={'Add to Cart'}
                                    />
                                </div>
                            )

                        })
                    }
                </div>
            </div>
        </section>
    );
}

export default NewMedicine;
