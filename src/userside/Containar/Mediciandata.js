import React, { useState } from 'react';
import { Formik, useFormik } from 'formik';
import { object, string, number, date, InferType } from 'yup';
import * as yup from 'yup';


function Mediciandata(props) {

    let localdata = JSON.parse(localStorage.getItem('medicine'));

    const [add, seatadd] = useState([localdata]);

    // console.log(localdata);

    // let search = () => {
    //     let datamedi = document.getElementById('search').value;

    //     console.log(datamedi);
    // }


    // localStorage.seatadd('medicine', JSON.stringify([localdata]));

    // localdata.map((v,i) => {
    //     console.log(v);
    // })


    React.useEffect(() => {
        let localData = JSON.parse(localStorage.getItem("medicine"));

        if (localData !== null) {
            seatadd(localData)
        }
      }, []);


    return (
        <div>
            <h1>hello</h1>
            <div className='row'>

            {
                add.map((v, i) => {
                    return (
                        <div>
                        <h3>{v.name}</h3>,
                        <h3>{v.price}</h3>,
                        <h3>{v.date}</h3>,
                        <h3>{v.desc}</h3>,
                        <h3>{v.action}</h3>,
                      
                        </div>
                    )
                })
            }
            </div>

        </div>

    );
}

export default Mediciandata;

// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import { Button, CardActionArea, CardActions } from '@mui/material';

// export default function Mediciandata() {
//     let localdata = JSON.parse(localStorage.getItem('medicine'));
//     const [data, seatdata] = React.useState(localdata)
//     return (

//         <div>
//         {
//             data.map((v,i) => {
//                 console.log(v);
//             })
//         }
//     </div>


//         <Card sx={{ maxWidth: 345 }}>
//             <CardActionArea>

//                 <CardContent>
//                     <Typography gutterBottom variant="h5" component="div">
//                         {v}
//                     </Typography>
//                     <Typography variant="body2" color="text.secondary">
//                         Lizards are a widespread group of squamate reptiles, with over 6,000
//                         species, ranging across all continents except Antarctica
//                     </Typography>
//                 </CardContent>
//             </CardActionArea>
//             <CardActions>
//                 <Button size="small" color="primary">
//                     Share
//                 </Button>
//             </CardActions>
           
//         </Card>


//     );
// }
