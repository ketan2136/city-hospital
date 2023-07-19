import React, { useState } from 'react';
import Listmedician from './Listmedician';
import Heading from '../../Components/UL/Heading/Heading';


function Mediciandata(props) {
    const [add, seatadd] = useState([]);
    // const [fillter, setfillter] = useState('');

    React.useEffect(() => {
        let localData = JSON.parse(localStorage.getItem("medicine"));

        if (localData) {
            seatadd(localData)
        }
    }, []);

    const handlechange = (val) => {
        let localData = JSON.parse(localStorage.getItem("medicine"));


        let fdata = localData.filter((v) =>
            v.name.toLowerCase().includes(val.toLowerCase()) ||
            v.price.toString().includes(val) ||
            v.date.toString().includes(val) ||
            v.desc.toLowerCase().includes(val.toLowerCase()) 

        );
        console.log(fdata);

        seatadd(fdata)


    }

    return (
        <section id="contact" className="contact">
            <div className="container">
                <div className="section-title">
                    <h2>Medician</h2>
                    {/* <Heading type='h2'> <h2>Medician</h2></Heading> */}
                    <p>Aenean enim orci, suscipit vitae sodales ac, semper in ex. Nunc aliquam eget nibh eu euismod. Donec dapibus
                        blandit quam volutpat sollicitudin. Aenean ac turpis ante. Mauris velit sapien, aliquet aliquet rhoncus quis,
                        luctus at neque. Mauris sit amet massa sed orci vehicula facilisis.</p>
                </div>
            </div>
            <div className="container">
                <input type='search ' name='searce' onChange={(e) => handlechange(e.target.value)}></input>
                <div className='row'>
                    <Listmedician mdata={add} />
                </div>
            </div>
        </section>
    );
}

export default Mediciandata;