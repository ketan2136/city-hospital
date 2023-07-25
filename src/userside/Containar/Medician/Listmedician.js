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

function Listmedician({ mdata, onClick }) {
    console.log(mdata);
    return (
        <>
            {
                mdata ?
                    mdata.map((v, i) => {
                        return (
                            <div className='col-md-3'>
                                <Cardcostom
                                    value={v}
                                    onClick1={onClick}
                                />
                            </div>
                        )

                    }) : null
            }
        </>
    );
}

export default Listmedician;