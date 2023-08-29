import { Height } from '@mui/icons-material';
import React from 'react';
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useSelector } from 'react-redux';
import FavoriteIcon from '@mui/icons-material/Favorite';

function Cardcostom({ value, onclick1, btnval, fevorite, onclick2 }) {

    
    const favData = useSelector((state) => state.fevorite);

    const data = favData.item.map((v) => v.pid )

    const indexData = favData.item.findIndex((v) => v.pid === value.id )

    return (
        <>
            <Card
                style={{
                    width: '20rem',
                    Height: '18rem'
                }}
            >

                <CardBody className='cardcostom'>

                    <CardTitle tag="h5" className='fevoriteIcon'>
                        {value.name}
                        {/* <FavoriteBorderIcon onClick={() => onclick2(value.id)} /> */}
                        {
                            value.id === data[indexData] ?

                                <FavoriteIcon onClick={() => onclick2(value.id)}  style={{
                                    color:'red'
                                }}/>
                                : <FavoriteBorderIcon  onClick={() => onclick2(value.id)}/>
                        }
                    </CardTitle>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                        {value.price}
                    </CardSubtitle>
                    <CardText>
                        {value.desc.substring(0, 100) }
                    </CardText>
                    {

                        value.btn ? <Button>
                            add card
                        </Button>
                            :
                            null
                    }
                    {
                        btnval ?
                            <Button onClick={() => onclick1(value.id)}>
                                {btnval}
                            </Button> :
                            null
                    }

                </CardBody>
            </Card>
        </>
    );
}

export default Cardcostom;