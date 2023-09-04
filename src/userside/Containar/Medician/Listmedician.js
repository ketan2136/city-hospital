import React, { useContext } from 'react';
import Cardcostom from '../../Components/UL/Cardcostom';
import { ThemeContext } from '../../../ConText/ThemeProvider';

function Listmedician({ mdata, hableCard1, handlefav }) {

    let theme = useContext(ThemeContext);

    return (
        <>
            {
                mdata.map((v, i) => {
                    return (
                        <div className={`col-md-4 medicinebuttam g-1 ${theme.theme}`}>
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