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
function shuffle(arr)
{
    const array=[...arr];
    for(let i=array.length-1;i>0;i--)
    {

        const j=Math.floor(Math.random()*(i+1));
        [array[i],array[j]]=[array[j],array[i]];
    }
    return array;
}
export default function CardSpace()
{
    const data=shuffle(gifData);
    
    return(<><div className="cardSec">
       {data.map((item)=><Card gifId={item.gifId} name={item.name}/>)}
        
    </div></>)
}

