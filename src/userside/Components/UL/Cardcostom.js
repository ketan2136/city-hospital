import { Height } from '@mui/icons-material';
import React from 'react';
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap';

function Cardcostom({ value, onclick1, btnval }) {
    return (
        <>
            <Card
                style={{
                    width: '20rem',
                    Height: '18rem'
                }}
            >
                {/* <img
                    alt="Sample"
                    src="https://picsum.photos/300/200"
                /> */}
                <CardBody>
                    <CardTitle tag="h5">
                        {value.name}
                    </CardTitle>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                        {value.price}
                    </CardSubtitle>
                    <CardText>
                        {value.desc}
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