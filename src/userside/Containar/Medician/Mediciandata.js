import React, { useState } from 'react';
import { getMedicineData } from '../../redux/action/medicine.action';
import { useDispatch, useSelector } from 'react-redux';
import Listmedician from './Listmedician'
import { addToCart } from '../../redux/slice/CartSlice';
import { addToFevorite } from '../../redux/action/fevorite.action';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';


function Mediciandata(props) {
    const dispatch = useDispatch();
    const [search, setSearch] = useState([]);
    const medicines = useSelector(state => state.medicines);


    React.useEffect(() => {
        dispatch(getMedicineData())
    }, []);


    const handlechange = (val) => {
        let fdata = medicines.medicines.filter((v) =>
            v.name.toLowerCase().includes(val.toLowerCase()) ||
            v.price.toString().includes(val) ||
            v.expiry.toString().includes(val) ||
            v.desc.toLowerCase().includes(val.toLowerCase())

        );
        console.log(fdata);

        setSearch(fdata);
    }

    const handlecard = (id) => {
        dispatch(addToCart({ pid: id, qty: 1 }))
        console.log("handle card call" + id);
    }

    const handlefav = (id) => {
        console.log(id);
        dispatch(addToFevorite(id))
    }

    return (
        <section id="contact" className="contact">
            <div className="container">
                <div className="section-title">
                    <h2>Medicine</h2>
                    <p>Aenean enim orci, suscipit vitae sodales ac, semper in ex. Nunc aliquam eget nibh eu euismod. Donec dapibus
                        blandit quam volutpat sollicitudin. Aenean ac turpis ante. Mauris velit sapien, aliquet aliquet rhoncus quis,
                        luctus at neque. Mauris sit amet massa sed orci vehicula facilisis.</p>
                </div>
            </div>
            <div className="container" >
                <div className='row justify-content-center mt-3'>
                    <Input
                        className='justify-content-center'
                        style={{ width: '40rem' }}
                        onChange={(e) => handlechange(e.target.value)}
                        id="input-with-icon-adornment"
                        startAdornment={
                            <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>
                        }
                    />
                </div>

                <div className='row'>
                    <Listmedician
                        mdata={search.length > 0 ? search : medicines.medicines}
                        hableCard1={handlecard}
                        handlefav={handlefav}
                    />
                </div>
            </div>
        </section>
    );
}

export default Mediciandata;