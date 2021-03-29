import React from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from './Button';

function SignUp () {
    return (
        <div>
            <Form>
                <h3>Interested in learning Chinese? Fill out the form below and we can get started!</h3>
                <Form.Group>
                    <Form.Label column sm="2">
                    Your Name
                    </Form.Label>
                    <Col sm="10">
                    <Form.Control placeholder="Your name here" />
                    </Col>
                </Form.Group>

                <Form.Group controlId="formPlaintextPassword">
                    <Form.Label column sm="2">
                    Your Email
                    </Form.Label>
                    <Col sm="10">
                    <Form.Control type="email" placeholder="your@email.here" />
                    </Col>
                </Form.Group>
                <Form.Group>
                    <h4>What are you interested in?</h4>

                    {['Chinese Lessons', 'FREE Chinese Learning Materials'].map((i) => (
                        <div key={i} className="mb-3">
                        <Form.Check 
                            type='checkbox'
                            id={`checkbox-${i}`}
                            label={`${i}`}
                        />
                        </div>
                    ))}
                </Form.Group>
                <Button>
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default SignUp;