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
            <Card.ImgOverlay className='parent'>
                <Card.Title className='card-text'>Want to learn Chinese? Sign Up below!</Card.Title>
                <Card.Text className='card-text'>
                </Card.Text>
                <Button className='card-btn'>
                    Sign-up
                </Button>
        

            </Card.ImgOverlay>
        </Card>
    )
}

export default SignUpCard;