

import React from 'react';
import Cardcostom from '../../Components/UL/Cardcostom';

function Listmedician({ mdata, hableCard1 , handleFevorite1}) {
    
   
    return (
        <>
            {
               
                    mdata.map((v, i) => {
                        return (
                            <div className='col-md-3'>
                                <Cardcostom
                                    value={v}
                                    onclick1={hableCard1}
                                    btnval={'Add to Cart'}
                                    onclick2={handleFevorite1}
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