import React from 'react';
import Cardcostom from '../../Components/UL/Cardcostom';

function Listmedician({ mdata, hableCard1, handlefav }) {


    return (
        <>
            {
                mdata.map((v, i) => {
                    return (
                        <div className='col-md-4 medicinebuttam g-2'>
                            <Cardcostom
                                value={v}
                                onclick1={hableCard1}
                                btnval={'Add to Cart'}
                                onclick2={handlefav}
                                fevorite={'Add to fevorite'}
                            />
                        </div>
                    )

                })
            }
        </>
    );
}

export default Listmedician;