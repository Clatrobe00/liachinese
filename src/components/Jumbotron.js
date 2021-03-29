import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap'
import './Jumbotron.css'

const JumbotronCustom = (props) => (
    <>    
        <Jumbo fluid className='Jumbo' style={{ backgroundImage: `url(${props.image})`, backgroundSize: 'cover', position: 'relative', alt: 'Chinese Lanterns Photo by mentatdgt from Pexels'}}>
            <div className='overlay'></div>
            {[props.children]}
        </Jumbo>
    </>    
)

export default JumbotronCustom;