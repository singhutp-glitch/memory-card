import { useState,useEffect } from "react";
import Card from "./card";
const gifData=["lXo8uSnIkaB9e",'qadvd1vBaZBBu','EOfarA6ZUqzZu',
                '6tb0l9xAT5z48xdwFE','3oxHQrAmG6bd6RRh4s','Gwtv1sXXnunMA',
                'Bw40mhWXVHZ0Q','VZXJyfOqpvuiIw3oJM'
]
export default function CardSpace()
{
    return(<><div className="cardSec">
       {gifData.map((item)=><Card gifId={item}/>)}
        
    </div></>)
}

