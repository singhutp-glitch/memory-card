import { useState,useEffect } from "react";
import Card from "./card";

const gifData=[{name:'iron man',gifId:"lXo8uSnIkaB9e",id:0},
            {name:'captain america',gifId:'qadvd1vBaZBBu',id:1},
            {name:'thor',gifId:'EOfarA6ZUqzZu',id:2},
            {name:'thanos',gifId:'6tb0l9xAT5z48xdwFE',id:3},
            {name:'Dr strange',gifId:'3oxHQrAmG6bd6RRh4s',id:4},
            {name:'hulk',gifId:'Gwtv1sXXnunMA',id:5},
            {name:'odin',gifId:'Bw40mhWXVHZ0Q',id:6},
            {name:'spider man',gifId:'VZXJyfOqpvuiIw3oJM',id:7},
            {name:'black widow',gifId:'Zzak2Yc1rm608',id:8},
            {name:'hawkye',gifId:'KAIHq4s57HAZO',id:9},
            {name:"vision",gifId:'13AxPITLy0hmBW',id:10},
            {name:'loki',gifId:'dzKU9L98kJSLK',id:11}
    
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
export default function CardSpace(props)
{
    const data=shuffle(gifData);
    
    return(<><div className="cardSec">
       {data.map((item)=><Card gifId={item.gifId} name={item.name} key={item.id}
       id={item.id} props={{...props}} />)}
        
    </div></>)
}

