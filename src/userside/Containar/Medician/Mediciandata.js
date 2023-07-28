import React from 'react';
import { getMedicineData } from '../../redux/action/medicine.action';
import { useDispatch, useSelector } from 'react-redux';
import Listmedician from './Listmedician'
import { addToCart } from '../../redux/action/card.action';


function Mediciandata(props) {
    const dispatch = useDispatch();
    const medicines = useSelector(state => state.medicines)
    // const [fillter, setfillter] = useState('');

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



    }

    const handlecard = (id) => {
        dispatch(addToCart(id))
        console.log("handle card call"+ id);
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
            <div className="container" >
                <input type='search ' name='searce' onChange={(e) => handlechange(e.target.value)}></input>
                <div className='row'>
                    <Listmedician
                        mdata={medicines.medicines ? medicines.medicines : []}
                        hableCard1={handlecard}
                    />
                </div>
            </div>
        </section>
    );
}

export default Mediciandata;