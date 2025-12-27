import { useState,useEffect } from "react";

export default function CardSpace()
{
    const [imgUrl,setImgUrl]=useState(null);

    useEffect(()=>{
        async function newImage()
        {
            const target='ironman';

            let url='https://api.giphy.com/v1/gifs/translate?api_key=76sHFQVOfK3kGZLUONxubMZ4T6t3Mgdg&s='+target;
            
            const res=await fetch(url);
            const data=await res.json();
            setImgUrl(data.data.images.fixed_width.url);
        }
        newImage();
        
    },[])

    return(<><div className="cardSec">
        
        <div className="card">
            <img className='cardImg' src={imgUrl} height='300px' width='250px' />
            <div className="name">pikachu</div>
        </div>
        
    </div></>)
}

