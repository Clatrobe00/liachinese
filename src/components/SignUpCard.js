import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Card, Button } from 'react-bootstrap';

function SignUpCard () {
    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img src="../../public/logo192.png" height='100%' width='100%' alt="Lia Profile Picture" />
                <Card.ImgOverlay>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                </Card.ImgOverlay>
            </Card>
        </>
    )
}

export default SignUpCard;