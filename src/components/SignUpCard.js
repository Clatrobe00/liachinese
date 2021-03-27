import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Link } from 'react';
import { Card, Button } from 'react-bootstrap';

function SignUpCard () {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="../../public/photos/LiaProf.png" />
            <Card.Body>
                <Card.Title>Want to learn Chinese?</Card.Title>
                <Card.Text>
                    Send me a quick message and we can set something up!
                </Card.Text>
                {/* <Link to="/signup"> */}
                    <Button variant="primary">Sign Up Here</Button>
                {/* </Link> */}

            </Card.Body>
        </Card>
    )
}

export default SignUpCard;