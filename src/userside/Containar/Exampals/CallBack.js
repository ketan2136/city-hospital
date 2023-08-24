import { colors } from '@mui/material';
import React, { useCallback, useState } from 'react';
import ListData from './ListData';

function CallBack({item}) {

    const [theme, setTheme] = useState(false);
    const [number, setNumber] = useState(1)

    const themeBackg = {
        background: theme ? '#000' : '#fff',
        color: theme ? '#fff' : '#000'
    }

    const getitem = useCallback((n) => {
        return[number, number+n, number+n+1]
    }, [number])


    return (
        <>
            <div style={themeBackg}>
                <section id="contact" className="contact">
                    <div className="container">
                        <div className="section-title">
                            <h2>Call Back</h2>
                          
                            <p >Aenean enim orci, suscipit vitae sodales ac, semper in ex. Nunc aliquam eget nibh eu euismod. Donec dapibus
                                blandit quam volutpat sollicitudin. Aenean ac turpis ante. Mauris velit sapien, aliquet aliquet rhoncus quis,
                                luctus at neque. Mauris sit amet massa sed orci vehicula facilisis.</p>
                        </div>
                    </div>


                    <div >
                        <button onClick={() => { setTheme(!theme) }}>Toogle Theme</button>

                        <input type='text' onChange={(event) => setNumber(parseInt(event.target.value))}/>

                        <ListData items={getitem} />
                    </div>
                </section>
            </div>
        </>
    );
}

export default CallBack;