import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from './Button';

function SignUp () {
    const [signUp, setSignUp] = useState({
        name: '',
        email: '',
        lessons: false,
        materials: false,

    });

    const handleChange = (e) => {
        console.log(e.target.value);
        setSignUp({...signUp, [e.target.name]: e.target.value})
    }

    const handleSubmit = () => {
        console.log(signUp);
    }

    const handleCheckBox = (e) => {
        setSignUp({...signUp, [e.target.name]: e.target.checked})
    }

    return (
        <div>
            <Form>
                <h3>Interested in learning Chinese? Fill out the form below and we can get started!</h3>
                <Form.Group>
                    <Form.Label column sm="2">
                    Your Name
                    </Form.Label>
                    <Col sm="10">
                    <Form.Control name='name' value={signUp.name} onChange={handleChange} placeholder="Your name here" />
                    </Col>
                </Form.Group>

                <Form.Group controlId="formPlaintextPassword">
                    <Form.Label column sm="2">
                    Your Email
                    </Form.Label>
                    <Col sm="10">
                    <Form.Control name='email' value={signUp.email} onChange={handleChange} type="email" placeholder="your@email.here" />
                    </Col>
                </Form.Group>
                <Form.Group>
                    <h4>What are you interested in?</h4>

                    {['Chinese Lessons', 'FREE Chinese Learning Materials'].map((i) => (
                        <div key={i} className="mb-3">
                        <Form.Check 
                            name={i.split(' ')[i.split(' ').length - 1].toLowerCase()}
                            onChange={handleCheckBox}
                            type='checkbox'
                            id={`checkbox-${i}`}
                            label={`${i}`}
                        />
                        </div>
                    ))}
                </Form.Group>
                <Button onClick={handleSubmit}>
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default SignUp;