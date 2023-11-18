import React, { useContext } from "react";
import DataContext from "../contexts/DataContext";

function StonePaperScissor() {
  const { systemValue, performSps, userValue, spsResult } =
    useContext(DataContext);
  return (
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
  );
}
export default StonePaperScissor;
