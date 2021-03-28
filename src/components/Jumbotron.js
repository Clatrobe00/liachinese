import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap'
import './Jumbotron.css'

const JumbotronCustom = () => (
    <>    
        <Jumbo fluid className='Jumbo'>
            <div className='overlay'></div>
                <Container>
                    <h1>Welcome</h1>
                    <p>The Funniest Chinese teacher you can find.</p>
                </Container>

        </Jumbo>
    </>    
)

export default JumbotronCustom;