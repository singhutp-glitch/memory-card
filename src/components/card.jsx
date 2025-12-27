import { useState,useEffect } from "react";

export default function Card()
{
    const GIF_ID = "lXo8uSnIkaB9e"; // pikachu

    const still = `https://media.giphy.com/media/${GIF_ID}/giphy_s.gif`;
    return(<>
        
        <div className="card">
            <img className='cardImg' src={still} height='300px' width='250px' />
            <div className="name">iron man</div>
        </div></>)
}

