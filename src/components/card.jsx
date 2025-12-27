import { useState,useEffect } from "react";

export default function Card({gifId})
{
    const GIF_ID = '6tb0l9xAT5z48xdwFE'; // pikachu

    const still = `https://media.giphy.com/media/${gifId}/giphy_s.gif`;
    return(<>
        
        <div className="card">
            <img className='cardImg' src={still} height='300px' width='250px' />
            <div className="name">iron man</div>
        </div></>)
}

