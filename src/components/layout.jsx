import { useState } from "react";
import CardSpace from "./cardSpace";

export default function Layout()
{
  const [currentScore,setCurrentScore]=useState(0);
  const [bestScore,setBestScore]=useState(0);
  const [cardRecord,setCardRecord]=useState([Array(8).fill(false)]);
  function gameOver()
  {
    setBestScore(currentScore);
    setCurrentScore(0);
    setCardRecord(Array(8).fill(false));
  }
  function nextRound(lastSelectedCardId)
  { if(currentScore===7)
    {
      alert('you win');
      gameOver();
      
    }
    else{
      setCardRecord((prev)=>[...prev,prev[lastSelectedCardId]=true]);
      setCurrentScore((prev)=>prev+1);
    }
  }
    return (
      <div className="layout">
        <div className="upperPanel">
          <div className="gameRule">click the card to win point but do not click any card twice</div>
          <div className="score">
            <div>current score:{currentScore}</div>
            <div>best score:0</div>
          </div>
        </div>
        <CardSpace nextRound={nextRound} gameOver={gameOver} cardRecord={cardRecord}/>
      </div>);
}