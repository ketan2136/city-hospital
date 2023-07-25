// import React from 'react';
// import Cardcostom from '../../Components/UL/Cardcostom';

// function Listmedician({mdata}) {
//     console.log(mdata);
//     return (
//         <></>

//             // {
//             //     mdata.map((v, i) => {
//             //         return (
//             //             <div className='col-md-3'>
//             //                 <Cardcostom value={v} />
//             //             </div>
//             //         )

//             //     })
//             // }


//     );
// }

// export default Listmedician;

import React from 'react';
import Cardcostom from '../../Components/UL/Cardcostom';

function Listmedician({ mdata, hableCard1 }) {
    
   
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
                                />
                            </div>
                        )

                    }) 
            }
        </>
    );
}

export default Listmedician;