import React, { useEffect, useState } from 'react';

function ListData({items}) {
    const [data, setData] = useState([1]);

    useEffect(() => {
        setData(items(2))
    }, [items])
    

    return (
        <div>
            <ul>
            {
                data.map((v, i) => {
                    return (
                        <li key={i}>{v}</li>
                    )
                })
            }
            </ul>
        </div>
    );
}

export default ListData;