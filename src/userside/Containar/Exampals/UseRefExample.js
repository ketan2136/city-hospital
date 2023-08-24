import React, { useEffect, useRef, useState } from 'react';

function UseRefExample(props) {
    const [number, setNumber] = useState('');
    const ref = useRef(0);

    useEffect(() => {
        ref.current = ref.current + 1;
    }, [number])

    return (
        <>
            <div >
                <section id="contact" className="contact">
                    <div className="container">
                        <div className="section-title">
                            <h2>Call Back</h2>

                            <p >Aenean enim orci, suscipit vitae sodales ac, semper in ex. Nunc aliquam eget nibh eu euismod. Donec dapibus
                                blandit quam volutpat sollicitudin. Aenean ac turpis ante. Mauris velit sapien, aliquet aliquet rhoncus quis,
                                luctus at neque. Mauris sit amet massa sed orci vehicula facilisis.</p>
                        </div>
                    </div>

                    <input type='text' onChange={(event) => { setNumber(event.target.value) }} />

                    <p>your name : {number}</p>
                    <p>time of render: {ref.current}</p>
                </section>
            </div>
        </>
    );
}

export default UseRefExample;