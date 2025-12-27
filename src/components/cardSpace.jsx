import { useState,useEffect } from "react";
import Card from "./card";

const gifData=[{name:'iron man',gifId:"lXo8uSnIkaB9e"},
            {name:'captain america',gifId:'qadvd1vBaZBBu'},
            {name:'thor',gifId:'EOfarA6ZUqzZu'},
            {name:'thanos',gifId:'6tb0l9xAT5z48xdwFE'},
            {name:'Dr strange',gifId:'3oxHQrAmG6bd6RRh4s'},
            {name:'hulk',gifId:'Gwtv1sXXnunMA'},
            {name:'odin',gifId:'Bw40mhWXVHZ0Q'},
            {name:'spider man',gifId:'VZXJyfOqpvuiIw3oJM'},
    
]
export default function CardSpace()
{
    return(<><div className="cardSec">
       {gifData.map((item)=><Card gifId={item.gifId} name={item.name}/>)}
        
    </div></>)
}

