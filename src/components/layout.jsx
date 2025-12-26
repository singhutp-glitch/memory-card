import CardSpace from "./cardSpace";

export default function Layout()
{
    return (
      <div className="layout">
        <div className="upperPanel">
          <div className="gameRule">click the card to win point but do not click any card twice</div>
          <div className="score">
            <div>current score:0</div>
            <div>best score:0</div>
          </div>
        </div>
        <CardSpace/>
      </div>);
}