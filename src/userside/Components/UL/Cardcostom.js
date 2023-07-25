import React from 'react';
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap';

function Cardcostom({ value, onClick1 }) {
    return (
        <>
            {/* <Card
                style={{
                    width: '18rem'
                }}
            >
                {
                    value.url ? <img
                        alt="Sample"
                        src="https://picsum.photos/300/200"
                    /> :
                        null
                }

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
                       value.Button ? <Button onClick={onClick1}>
                            add card
                        </Button> 
                        :
                        null
                    }

                </CardBody>
            </Card> */}

            <Card
                style={{
                    width: '18rem'
                }}
            >
                <img
                    alt="Sample"
                    src="https://picsum.photos/300/200"
                />
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
                    <Button>
                        Button
                    </Button>
                </CardBody>
            </Card>
        </>
    );
}

export default Cardcostom;