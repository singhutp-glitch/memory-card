import { useState } from "react";
import CardSpace from "./cardSpace";

export default function Layout()
{
  const [currentScore,setCurrentScore]=useState(0);
    return (
      <div className="layout">
        <div className="upperPanel">
          <div className="gameRule">click the card to win point but do not click any card twice</div>
          <div className="score">
            <div>current score:{currentScore}</div>
            <div>best score:0</div>
          </div>
        </div>
        <CardSpace setCurrentScore={setCurrentScore}/>
      </div>);
}