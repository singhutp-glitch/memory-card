import { useState,useEffect } from "react";

export default function Card({gifId,name,onClick})
{
    

    const still = `https://media.giphy.com/media/${gifId}/giphy_s.gif`;
    return(<>
        
        <div className="card" onClick={()=>onClick((prev)=>prev+1)}>
            <img className='cardImg' src={still} height='300px' width='250px' />
            <div className="name">{name}</div>
        </div></>)
}

