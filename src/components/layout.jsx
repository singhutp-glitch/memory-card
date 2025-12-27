import { useState } from "react";
import CardSpace from "./cardSpace";

export default function Layout()
{
  const [currentScore,setCurrentScore]=useState(0);
  const [bestScore,setBestScore]=useState(0);
  const [cardRecord,setCardRecord]=useState([Array(8).fill(false)]);
  function gameOver(didWin)
  {
    const newBestScore=Math.max(currentScore+didWin,bestScore);
    setBestScore(newBestScore);
    setCurrentScore(0);
    setCardRecord(Array(8).fill(false));
  }
  function nextRound(lastSelectedCardId)
  { 
    setCurrentScore((prev)=>prev+1);
    if(currentScore===7)
    {
      alert('you win');
      gameOver(1);
      
    }
    else{
      setCardRecord((prev)=>[...prev,prev[lastSelectedCardId]=true]);
      
    }
  }
    return (
      <div className="layout">
        <div className="upperPanel">
          <div className="gameRule">click the card to win point but do not click any card twice</div>
          <div className="score">
            <div>current score:{currentScore}</div>
            <div>best score:{bestScore}</div>
          </div>
        </div>
        <CardSpace nextRound={nextRound} gameOver={gameOver} cardRecord={cardRecord}/>
      </div>);
}