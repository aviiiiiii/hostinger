import React, { useContext } from "react";
import DataContext from "../contexts/DataContext";

function MiniGames() {
  const {
    systemValue,
    performSps,
    userValue,
    spsResult,
    peformHc,
    userHcValue,
    systemHcValue,
    hcScore,
  } = useContext(DataContext);
  return (
    <div className="miniGames">
      <div className="stonePaperScissor">
        StonePaperScissor
        <div className="spsInputDiv">
          <label htmlFor="stone">Stone</label>
          <input type="radio" id="stone" name="spsInput" value="Stone" />
          <br />
          <label htmlFor="stone">Paper</label>
          <input type="radio" id="paper" name="spsInput" value="Paper" />
          <br />
          <label htmlFor="stone">Scissor</label>
          <input type="radio" id="scissor" name="spsInput" value="Scissor" />
          <br />
          <button onClick={performSps}>submit</button>
        </div>
        <p>SystemValue is :&nbsp;{systemValue}</p>
        <p>UserValue is :&nbsp;{userValue}</p>
        <p>Result is :&nbsp;{spsResult}</p>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="handCricket">
        HandCricket
        <div className="hcInputDiv">
          <br />
          <label htmlFor="hcInput">UserInput</label>
          <input type="number" id="hcInput" />
          <br />
          <button onClick={peformHc}>submit</button>
        </div>
        <p>SystemValue is :&nbsp;{systemHcValue}</p>
        <p>UserValue is :&nbsp;{userHcValue}</p>
        <p>Score is :&nbsp;{hcScore}</p>
      </div>
    </div>
  );
}
export default MiniGames;
