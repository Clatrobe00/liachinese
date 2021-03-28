import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap'
import './Jumbotron.css'
import image from '../assets/lanterns-banner.png'

const JumbotronCustom = () => (
    <>    
        <Jumbo fluid className='Jumbo' style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', position: 'relative', alt: 'Chinese Lanterns Photo by mentatdgt from Pexels'}}>
            <div className='overlay'></div>
                <Container>
                    <h1 className='Jumbo-text'>Welcome</h1>
                    <h2 className='Jumbo-text'>to Lia Liu Chinese</h2>
                </Container>

        </Jumbo>
    </>    
)

export default JumbotronCustom;