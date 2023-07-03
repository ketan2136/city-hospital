import React from 'react';
import Cardcostom from '../../Components/UL/Cardcostom';

function Listmedician({mdata}) {
    return (
        <>
            {
                mdata.map((v, i) => {
                    return (
                        <div className='col-md-3'>
                            <Cardcostom value={v} />
                        </div>
                    )

                })
            }

        </>
    );
}

export default Listmedician;