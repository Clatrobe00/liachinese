import 'bootstrap/dist/css/bootstrap.min.css';
import './Videos.css';
import React from 'react';
import ReactPlayer from 'react-player'



function Videos () {
    return (
        <>
            <div className='player-wrapper'>
                <ReactPlayer className='react-player' playing width='100%' height='100%' url="https://www.youtube.com/watch?v=Hgz3yizw_30&t=5s" controls={true}/> 
            </div>

        </>
    )
};

export default Videos;