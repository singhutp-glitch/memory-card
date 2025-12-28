import { useState,useEffect } from "react";

export default function Card({gifId,name,id,props})
{
    

    const still = `https://media.giphy.com/media/${gifId}/giphy_s.gif`;
    return(<>
        
        <div className="card" onClick={()=>{
            if(props.cardRecord[id]===true)
            {
                alert('game over');
                props.gameOver(0);
            }
            else{
           
                props.nextRound(id);}
        }}>
            <img className='cardImg' src={still} height='300px' width='250px' />
            <div className="name">{name}</div>
        </div></>)
}

