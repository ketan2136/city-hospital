import React from 'react';
import Cardcostom from '../../Components/UL/Cardcostom';

function Listmedician({ departmentData }) {
    
   
    return (
        <>
            {
               
               departmentData.map((v, i) => {
                        return (
                            <div className='col-md-4'>
                                <Cardcostom
                                    value={v}
                                    btnVal={'ADD to Department'}
                                />
                            </div>
                        )

                    }) 
            }
        </>
    );
}

export default Listmedician;