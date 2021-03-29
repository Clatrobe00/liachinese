import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Card } from 'react-bootstrap';
import image from '../assets/cropProf.png'
import Button from './Button';
import './SignUpCard.css';

function SignUpCard () {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={image} />
            <Card.ImgOverlay>
                <Card.Title className='card-text'>Want to learn Chinese?</Card.Title>
                <Card.Text className='card-text'>
                    Send me a quick message and we can set something up!
                </Card.Text>
                <div>
                    <Button>
                        Sign-up
                    </Button>
                </div>

            </Card.ImgOverlay>
        </Card>
    )
}

export default SignUpCard;